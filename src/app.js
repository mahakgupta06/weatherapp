const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');
const { WSATYPE_NOT_FOUND } = require('constants');


const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");

app.set('views engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partialspath);

   app.use(express.static(staticpath));

//routing

app.get("/" ,(req,res)=>{
    res.render('index.hbs')
});

app.get("/about" ,(req,res)=>{
    res.render('about.hbs')
});
app.get("/weather" ,(req,res)=>{
    res.render("weather.hbs")
});
app.get("*" ,(req,res)=>{
    res.render('404 error.hbs',{
        errorMsg:'OOPS! PAGE NOT FOUND '
    })
});

app.listen(port , ()=>{
    console.log(`listening to the port at ${port}`);
});