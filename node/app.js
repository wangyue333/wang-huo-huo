const express=require("express");
const mysql=require("mysql");
const bodyParser=require('body-parser')

const app=express();
app.use(bodyParser.urlencoded({extended:true}))

var pool=mysql.createPool({
	host:"127.0.0.1",
	user:"root",
	password:"root",
	database:"item",
	port:3306
});

app.use("/list",function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.getConnection(function(err,connection){
		if(err){console.log(err)}
		connection.query(`select * from bumoban where state='${req.body.id}'`,function(err,data){
			if(err){console.log(err)}		
		res.send(data)
		connection.end()
		})
	})
})

app.use("/del",function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.getConnection(function(err,connection){
		if(err){console.log(err)}
		connection.query(`delete from bumoban where id='${req.body.id}'`,function(err,data){
			if(err){console.log(err)}
		console.log(data)
		res.send(data)
	    connection.end()
		})
	})
})

app.use("/up",function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.getConnection(function(err,connection){
		if(err){console.log(err)}
		connection.query(`update bumoban set state='${req.body.state}' where id='${req.body.id}'`,function(err,data){
			if(err){console.log(err)}
		console.log(data)
		res.send(data)
		connection.end()
		})
	})
})

app.use("/add",function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	console.log(req.body)
	pool.getConnection(function(err,connection){
		if(err){console.log(err)}
		connection.query(`insert into bumoban(name,sex,state) values ('${req.body.name}','${req.body.sex}','${req.body.state}')`,function(err,data){
			if(err){console.log(err)}
		console.log(data)
		res.send(data)
		connection.end()
		})
	})
})




app.listen(8000,function(){
	console.log("ok")
})