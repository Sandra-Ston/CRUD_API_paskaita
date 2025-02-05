console.log('test');

const express = require('express');
const app = express();
const pool = require('./database'); //prisijungiama prie duomenu bazes

app.use(express.json());

//req - request
//res - response

//PRODUCTS-----------------------------------------------------------------------------
app.get('/products', async (req, res) => {
    try{
        const results = await pool.query("select * from products");
        res.status(200).json(results.rows);
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
    
});


app.get('/products/:id', async (req, res) => {
    try{
        const id = req.params.id; //id imamas is params
        const results = await pool.query(`select * from products where id=$1`, [id]);
        res.status(200).json(results.rows);
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
});

app.post('/products', async (req, res) => {
    try{

        const {title, description, price} = req.body;
        const results = await pool.query(
            `insert into products (title, description, price) values ('${title}', '${description}', '${price}') returning*`);
        res.status(201).json(results.rows[0]);
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
});

app.put('/products/:id', async (req, res) => {
    try{

        const { id } = req.params; //ID iš URL
        const {title, description, price} = req.body;
        const results = await pool.query(
            `update products set title = '${title}', description = '${description}', price = '${price}' where id = '${id}' returning *`);
        if (results.rowCount === 0){
            return res.status(404).json({error: 'Product not found'});
        }
        res.status(200).json(results.rows[0]);
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params; //ID iš URL

        const results = await pool.query(
            `DELETE FROM products WHERE id = $1 RETURNING *`, 
            [id]
        );

        if (results.rowCount === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted', deletedProduct: results.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Error deleting product' });
    }
});






//USERS---------------------------------------------------------------------------------------
//grazina visus vartotojus
app.get('/users', async (req, res) => {
    try{
        const results = await pool.query("select * from users");
        res.status(200).json(results.rows);
        //res.status(200).json({message: 'Sėkmingai pasiekiamas produktų puslapis'});
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
    
});



//grazina viena, konkretu varotoja
app.get('/users/:id', async (req, res) => {
    try{
        const id = req.params.id; //id imamas is params
        const results = await pool.query(`select * from users where id=$1`, [id]);
        res.status(200).json(results.rows);
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }


});

//sukuriams naujas vartotojas

app.post('/users', async (req, res) => {
    try{

        const {id, username, password} = req.body;
        const results = await pool.query(`insert into users (id, username, "password") values (${id}, '${username}', '${password}') returning*`);
        res.status(201).json(results.rows[0]);
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }


});

//PUT/PATCH  /users/:id - route redaguos users



app.put('/users/:id', async (req, res) => {
    try{

        const id = req.params.id;

        const {username, password} = req.body;
        const results = await pool.query(`update users set username = '${username}', "password" = '${password}' where id = '${id}' returning *`);
        res.status(200).json(results.rows[0]);
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }


});


//DELETE /users/:id - istrins users
app.delete('/users/:id', async (req, res) => {
    try{

        const id = req.params.id;
        const results = await pool.query(`delete from users where id = ${id}`);
        res.status(200).json({message: 'Elementas istrintas'});
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }


});




const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
    
});
