const express = require("express");

const app = express();

app.use(express.json({extended: true}));
app.use('/api', require('./routes/invoice.router'));

const PORT = process.env.PORT || 5000;

async function start() {
    app.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}...`)
    });
}

start();