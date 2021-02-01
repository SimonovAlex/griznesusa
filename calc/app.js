const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session');
const bcrypt = require('bcrypt');
const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root", // calc
    database: "calc_db", 
    password: "legdev" // calcpass
});

/* FOR LOGIN */

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        if(username && password){
            username = username.trim();
            password = password.trim();

            // const saltRounds = 10;
            // const hash = bcrypt.hashSync(password, saltRounds);
            // console.log(hash);

            connection.query(`SELECT password FROM users WHERE login="${username}";`, (error, result, fields) => {
                let userPass = result[0];
                if(userPass){
                    userPass = userPass.password;
                    bcrypt.compare(password, userPass, function(err, result){
                        if(result){
                            done(null, username);
                        }else{
                            return done(null, false);
                        }
                    });
                }else{
                    return done(null, false);
                }
            });
        }
    }
));

passport.authenticationMiddleware = function authenticationMiddleware(role = ''){
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            if(role === ''){
                return next()
            }else{
                connection.query(`SELECT login FROM users WHERE role='${role}' AND login='${req.user}';`, (e, r, f) => {
                    if(r.length > 0){
                        return next();
                    }else{
                        res.redirect('/');
                    }
                });
            }
        }else{
            res.redirect('/login');
        }
    }
};

/* FOR EXCEL UPLOAD */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/files/excel/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback){
        var ext = path.extname(file.originalname);
        if(ext !== '.xlsx') {
            return callback(new Error('Only excel files are allowed'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 1024 * 1024
    }
});

/* CREATE APP */

const app = express();
const port = 80;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit:'5mb'
}));

app.use(session({
    secret: 'carcar secret',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs');

/* ROUTES */
/* BAD CODE - SORRY */
app.get('/', passport.authenticationMiddleware(), (req, res) => {
    res.render('./pages/index.ejs');
});

app.get('/getCalcData', passport.authenticationMiddleware(), (req, res) => {
    const user = req.user;
    connection.query(`SELECT city, savannah, ca, ny, tx FROM copartcitiesandports WHERE user='${user}';`, (e1, r1, f1) => {
        connection.query(`SELECT city, savannah, ca, ny, tx FROM iaaicitiesandports WHERE user='${user}';`, (e2, r2, f2) => {
            connection.query(`SELECT min, max, fee_amount, feeAmountInPercent FROM copartfinalbetrange WHERE user='${user}';`, (e3, r3, f3) => {
                connection.query(`SELECT min, max, fee_amount, feeAmountInPercent FROM iaaifinalbetrange WHERE user='${user}';`, (e4, r4, f4) => {
                    connection.query(`SELECT min, max, bet FROM copartbetsinrealtime WHERE user='${user}';`, (e5, r5, f5) => {
                        connection.query(`SELECT city, cost FROM citiesfordelivery WHERE user='${user}';`, (e6, r6, f6) => {
                            connection.query(`SELECT certificate_constant, port_odessa, griznes, copart_constant, IAAI_constant, SUV_const FROM settings WHERE user='${user}';`, (e7, r7, f7) => {
                                connection.query(`SELECT seller FROM acceptseller WHERE user='${user}';`, (e8, r8, f8) => {
                                    connection.query(`SELECT min, max, bet FROM iaaibetsinrealtime WHERE user='${user}';`, (e9, r9, f9) => {
                                        const data = [r1, r2, r3, r4, r5, r6, r7, r8, r9];
                                        res.send(data);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

app.get('/login', (req, res) => {
    res.render('./pages/login.ejs');
});

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: false })
);

app.get('/logout', function (req, res){
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

app.get('/admin', passport.authenticationMiddleware('admin'), (req, res) => {
    res.render('./pages/admin.ejs');
});

app.post('/loadFile', passport.authenticationMiddleware('admin'), upload.single('excel'), (req, res) => {
    let file = req.file;
    const user = req.body.user;
    readXlsxFile(fs.createReadStream(__dirname + "/files/excel/" + file.filename)).then((rows) => {

        let CopartCitiesAndPorts = [],
        IAAICitiesAndPorts = [],
        CopartFinalBetRange = [],
        IAAIFinalBetRange = [], 
        CopartBetsInRealTime = [],
        IAAIBetsInRealTime = [],
        citiesForDelivery = [],
        consts = [[]],
        seller = [];

        for(let i = 0; i < rows.length; i++){
            let item = rows[i];

            if(i >= 1 && i <= 6) consts[0].push(item[27]);

            if(i > 1){
                for(let j = 0; j < item.length; j++){
                    if(item[j] === '-') item[j] = -1;
                }

                if(item[0]) CopartCitiesAndPorts.push([item[0], item[1], item[2], item[3], item[4], user]);
                if(item[5]) IAAICitiesAndPorts.push([item[5], item[6], item[7], item[8], item[9], user]);
                if(item[10]) CopartFinalBetRange.push([item[10], item[11], item[12], user, item[13]]);
                if(item[14]) IAAIFinalBetRange.push([item[14], item[15], item[16], user, item[17]]);
                if(item[18]) CopartBetsInRealTime.push([item[18], item[19], item[20], user]);
                if(item[21]) IAAIBetsInRealTime.push([item[21], item[22], item[23], user]);
                if(item[24]) citiesForDelivery.push([item[24], item[25], user]);
                if(item[27] && i > 6) seller.push([item[27], user]);
            }
        }
        
        consts[0].push(user);

        const newDataArray = [
            ['copartcitiesandports', CopartCitiesAndPorts],
            ['iaaicitiesandports', IAAICitiesAndPorts], 
            ['copartfinalbetrange', CopartFinalBetRange], 
            ['iaaifinalbetrange', IAAIFinalBetRange], 
            ['copartbetsinrealtime', CopartBetsInRealTime], 
            ['citiesfordelivery', citiesForDelivery],
            ['iaaibetsinrealtime', IAAIBetsInRealTime],
            ['settings', consts],
            ['acceptSeller', seller] 
        ];

        for(let j = 0; j < newDataArray.length; j++){
            const dataArray = newDataArray[j];
            connection.query(`DELETE FROM ${dataArray[0]} WHERE user='${user}'`, (error, result, f1) => {
                connection.query(`INSERT INTO ${dataArray[0]} VALUES ?`, [dataArray[1]], (e, r, f) => {
   
                });
            });
        }

        res.render('./pages/admin.ejs');
      });
});

app.post('/getInfo', (req, res) => {
    const password = req.body.password, 
    vin = req.body.vin;

    if(password || vin){
        const query = `SELECT * FROM car_arrival, users WHERE car_arrival.vin = '${vin}' AND users.password='${password}';`;
        connection.query(query, (e, r, f) => {
            if(r.length > 0){
                res.render('./pages/index.ejs', {data: r[0], error: false});  
            }else{
                res.render('./pages/index.ejs', {data: null, error: true}); 
            } 
        });
    }else{
        res.render('./pages/index.ejs', {data: null, error: true}); 
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});