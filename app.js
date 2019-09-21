var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const admin = require('firebase-admin');
const serviceAccount = require('./server/config/firebase-admin-key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const cors = require('cors');
var port = process.env.PORT || 3000;
var app = express();
var session = require('express-session');
app.use(session({
  secret : 'yourSeasdasdasdasdcret',
  resave : false,
  saveUninitialized : false,
}));
app.set('views', path.join(__dirname, 'dist/job-hunt'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist/job-hunt')));
// app.use('/users', usersRouter);
// app.use('/employer', employerRouter);
require('./server/routes/employer')(app,db);
require('./server/routes/candidate')(app,db);
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'dist/job-hunt/index.html'));
});
app.listen(port, function(){
  console.log('App is listening to port : '+port);
});
