var express = require('express');
var  bodyParse = require('body-parser');
var  session = require('express-session');
var mysql = require('mysql');
var doctor = require('./doctor');
var hospital = require('./hospital');
var patient = require('./patient');

//creating app
var app = new express();

//setting template engine
app.set('view engine', 'ejs');

//setting static file path
app.use(express.static(__dirname +'/views'));
//console.log(__dirname +'/views/assets');

//setting session
app.use(session({
    resave:false,
				  saveUninitialized:true,
				  secret:"secret key"
}));

//setting body parser
app.use(bodyParse.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index',{title:'Ehr Blockchain'});
});

app.get('/doctor',doctor.login);
app.get('/test',(req,res)=>{res.render('host')});
//app.get('/keyy',(req,res)=>{res.end(req.session.name);});
//app.post('/doctor/add',doctor.add);

app.get('/hospital',hospital.login);
app.get('/signup_hospital',hospital.signup);

app.get('/patient',patient.login);
app.listen(8080);