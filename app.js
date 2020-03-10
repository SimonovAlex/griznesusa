const express = require("express");
const path = require("path");
const app = express();

app.use(express.json({extended: true}));
app.use('/api', require('./routes/invoice.router'));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'prod'){
    app.use('/', express.static(path.join(__dirname, 'client', "build")));

    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


async function start() {
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}...`)
    });
}

start();