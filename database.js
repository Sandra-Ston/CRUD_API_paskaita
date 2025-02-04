//Atsakingas uz prisijungima prie duombazes

require('dotenv').config(); //duomenu imimas is .env failo

const {Pool} = require('pg'); //npm i pg/ atsakingas uz prisijungima prie duomenu bazes

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,

});

pool.on('error', (err, client) => {
    console.error('Something is wrong', err);
    process.exit(-1); //isejimo kodas jei programa uzsiciklina
    
});

module.exports = pool; //visa faila galmima naudoti kaip moduli