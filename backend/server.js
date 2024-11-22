const express = require('express');
const app = express();

const cors = require('cors');
require('./db/config')
const Product = require('./db/Product');
const Mobile = require('./db/Mobile');


app.use(express.json());
app.use(cors());


app.get('/products', async (req, res) => {
    let result = await Product.find();
    res.send(result);
})

app.post('/add-product', async (req, res) => {

    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.post("/mobiles",async (req,res)=>{
    let mobile = new Mobile(req.body);
    let result =await mobile.save();
    res.send(result);
    
})

app.get("/mobiles",async(req,res)=>{
    let result= await Mobile.find();
    res.send(result);
    
})


app.listen(5000);