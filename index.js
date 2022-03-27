
const express = require('express');
const port = process.env.port || 8000;
const hbs = require('hbs');
const path = require('path');

const app =express();
// console.log(__dirname);
const staticpath = path.join(__dirname,"../nodejs weather website/public");
const templatespath = path.join(__dirname,"../nodejs weather website/templates/views");
const partialpath = path.join(__dirname,"../nodejs weather website/templates/partials");
app.set('view engine','hbs');
app.set('views',templatespath);
app.use('/public',express.static(staticpath));
hbs.registerPartials(partialpath);
app.get('/nodejsweatherwebsite/',(req,res)=>{
    res.render("index.hbs");
})

app.get('/about',(req,res)=>{
    res.render("about.hbs");
})

app.get('/weather',(req,res)=>{
    res.render("weather");
})

app.listen(port,(req,res)=>{
    console.log(`the server is starting at port ${port}`);
})