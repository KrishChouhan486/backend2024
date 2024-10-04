require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) =>{
    res.send('krish');
})
app.get('/twitter', (req, res) =>{
    res.send('krish chouhan');
})
app.get('/krish', (req, res)=>{
    res.send("<h1>this is krish</h2>");
})
app.listen(process.env.PORT, ()=>{
    console.log(`example app listening ${port}`);
})

