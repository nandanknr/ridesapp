var express=require('express');
var bodyParser=require('body-parser');
var path = require('path');
var mongojs= require('mongojs');

var db= mongojs('custom',['userlog']);


var app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));



app.get('/',function(req,res){
	res.render('main');


});
app.post('/a/b',function(req,res){

	var user={
		fname:req.body.fname,
		pwd:req.body.pwd
	}
	console.log(user);

db.userlog.insert(user,function(err,result){

		res.render('map');
});


		
});
app.listen(8000,function(){
	console.log(" Hello World ");
	
});