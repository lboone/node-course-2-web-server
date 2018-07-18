const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engile','hbs');

// Creating middleware
app.use((req,res,next)=>{
    // Create a logger for each request
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log',log + '\n',(err)=> {
        if(err) {
            console.log('Unable to append to server.log.');
        }
    });
    next();
});

// Maitenance Middleware
// Puts site into maintenance mode
// app.use((req,res,next)=>{
//     res.render('maintenance.hbs',{
//         pageTitle: 'We will be right back.',
//         welcomeMessage: 'The site is currently being updated, we will be right back soon!'
//     });
// });

app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',() => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(textToScream) => {
    return textToScream.toUpperCase();
});

app.get('/',(req, res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to our website. Please enjoy it today!'
     });
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
       pageTitle: 'About Page'
    });
});

app.get('/bad',(req,res) => {
    res.send({
        errorMessage:'Unable to fulfill this request!'
    });
});
app.listen(3000,() => {
    console.log('Server is up on port 3000');
});