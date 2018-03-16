// 引入的包后 , 返回的是函数
var express = require('express');
// 函数执行,就有了app
var app = express();

// 路由
app.get('/',function(req,res){
	res.send('你好');
});

app.get('/ha',function(req,res){
	res.send('hahahah');
});

app.get("/teacher/:gonghao",function(req,res){
	res.send('老师信息,工号:'+ req.params.gonghao );
});

app.listen(3000);