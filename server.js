var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var mysql = require('mysql');

var con = mysql.createConnection({
  	host: "localhost",
  	port: 3306,
  	user: "medi",
  	password: "secret1"
});
 
router.use(function (req,res,next) {
	console.log("/" + req.method);
  	next();
});

router.get("/",function(req,res){
  	res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  	res.sendFile(path + "about.html");
});

app.use("/",router);

app.use("*",function(req,res){
  	res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  	console.log("Live at Port 3000");
	con.connect(function(err) {
	if (err) throw err;
		console.log("Connected!");
	});
});
 
