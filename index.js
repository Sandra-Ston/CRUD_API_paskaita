console.log('test');

const express = require('express');
const app = express();

app.use(express.json());

//req - request
//res - response
app.get('/products', async (req, res) => {
    try{
        res.status(200).json({message: 'Sėkmingai pasiekiemas produktų puslapis'});
    }
    catch(err){
        res.status(400).json({error: 'error'});
    }
    
});

const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
    
});
