/*
	NodeJs Express 框架
		- 类似 Jquery框架 , 其实是做一个封装 , 更加简洁的开发
		- http://www.expressjs.com.cn 中文官网
		- npm install --save express  (下载安装express)
		- --save表示自动更新 package.json 文件
		- ejs node模板文件 可以在html里面写逻辑 <%  %>
			- 先安装 npm install ejs --save
		- 路由
			- get: app.get('网址',function(req,res){
				
			})	
			- post app.post('网址',function(req,res){
	
			})
			- 如果想用method全部方法 可以用	app.all('./',function(req,res){
				
			})	

	案例:
		- 初次体验
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

		- 静态文件
			var express = require('express');
			var app = express();

			// 提供静态文件伺服能力
			app.use(express.static('./public'));

			app.listen(3000);

		-ejs 模板引擎
			var express = require('express');
			var app = express();

			// 模板引擎为 ejs
			app.set('view engine','ejs');

			app.get('/',function(req,res){
				// 路径默认为:views , 所以直接写test 
				res.render('test',{
					// 绑定数据
					"news":[1,2,3,4]
				})
			});

			app.listen(3000);



*/	
