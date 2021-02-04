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
    user: "parser", // parser
    database: "excel_car_parser", 
    password: "G1o49gxmmt@" // G1o49gxmmt@
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
            connection.query(`SELECT password FROM settings WHERE login="${username}";`, (error, result, fields) => {
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
))

passport.authenticationMiddleware = function authenticationMiddleware(){
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        res.redirect('/login')
    }
};

/* FOR IMAGE UPLOAD */

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
  
app.get('/', (req, res) => {
    res.render('./pages/index.ejs', {data: null, error: false, user: req.session.passport});
});

app.get('/login', (req, res) => {
    res.render('./pages/login.ejs');
});

app.post('/login',
  passport.authenticate('local', { successRedirect: '/admin',
    failureRedirect: '/login',
    failureFlash: false })
);

app.get('/logout', function (req, res){
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });

app.get('/admin', passport.authenticationMiddleware(), (req, res) => {
    res.render('./pages/admin.ejs');
});

app.get('/admin/fullList', passport.authenticationMiddleware(), (req, res) => {
    const query = `SELECT * FROM car_arrival`;
    connection.query(query, (e, r, f) => {
        if(r.length > 0){
            res.render('./pages/fullList.ejs', {list: r});  
        }else{
            res.render('./pages/fullList.ejs', {list: []}); 
        } 
    });
});

app.post('/loadFile', passport.authenticationMiddleware(), upload.single('excel'), (req, res) => {
    let file = req.file;
    readXlsxFile(fs.createReadStream(__dirname + "/files/excel/" + file.filename)).then((rows) => {
        for(let i = 1; i < rows.length; i++){
            let item = rows[i];
            const client = item[0] ? item[0] : '-';
            const car = item[1] ? item[1] : '-';
            const vin = item[2] ? item[2] : '-';
            const delivery = item[3] ? item[3] : '-';
            const bServices = item[4] ? parseInt(item[4]) : 0;
            const portCost = item[5] ? parseInt(item[5]) : 0;
            const totalCost = item[6] ? parseInt(item[6]) : 0;
            const payment = item[7] ? parseInt(item[7]) : 0;
            const date = item[8] ? item[8] : '-';
            const fixCity = item[9] ? item[9] : '-';
            const towTruck = item[10] ? item[10] : '-';
            const shipLink = item[11] ? item[11] : '#';

           let query = `INSERT INTO car_arrival VALUES(NULL, '${client}', '${car}', '${vin}',
           ${bServices}, ${portCost}, ${totalCost}, ${payment}, '${date}', '${fixCity}', '${towTruck}', '${shipLink}', '${delivery}') 
            ON DUPLICATE KEY UPDATE vin = '${vin}';`;

            connection.query(query, (e, r, f) => {
                        
            });
        }
        res.render('./pages/admin.ejs');
      });
});

app.post('/getInfo', (req, res) => {
    const vin = req.body.vin.trim(),
    user = req.session.passport;
    if(vin){

        let query = '';
        if(user){
            query = `SELECT * FROM car_arrival, users WHERE car_arrival.vin = '${vin}' ORDER BY car_arrival.id DESC;`;
        }else{
            const password = req.body.password.trim();
            query = `SELECT * FROM car_arrival, users WHERE car_arrival.vin = '${vin}' AND users.password='${password}' ORDER BY car_arrival.id DESC;`;
        }

        connection.query(query, (e, r, f) => {
            if(r.length > 0){
                res.render('./pages/index.ejs', {data: r[0], error: false, user: user});  
            }else{
                res.render('./pages/index.ejs', {data: null, error: true, user: user}); 
            } 
        });
    }else{
        res.render('./pages/index.ejs', {data: null, error: true, user: user}); 
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
