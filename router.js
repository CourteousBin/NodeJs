// 要运用到 fs系统 模块
var fs = require('fs')

module.exports = function(app){


	app.get('/', function(req, res) {
		// 第二个参数是可选的,读取的文件按照 utf8 编码
		fs.readFile('./public/db/curdDb.json','utf8',function(err,data){


			res.render('./curd/index.html', {
		        fruits: [
		            '苹果',
		            '香蕉',
		            '菠萝',
		            '西瓜'
		        ],
		        students: [
					{"id":1,"name":"bin","gender":0,"age":"21","hobbies":"篮球"},
					{"id":2,"name":"bin","gender":0,"age":"21","hobbies":"足球"},
					{"id":3,"name":"bin","gender":0,"age":"21","hobbies":"排球"},
					{"id":4,"name":"bin","gender":0,"age":"21","hobbies":"羽毛球"},
					{"id":5,"name":"bin","gender":0,"age":"21","hobbies":"兵乓球"},
					{"id":6,"name":"bin","gender":0,"age":"21","hobbies":"马拉松"},
					{"id":7,"name":"bin","gender":0,"age":"21","hobbies":"写代码"},
				]
		    })
		})

	})

	app.get('/student/news',function(req,res){

	})

	app.get('/student/news',function(req,res){

	})

	app.get('/student/news',function(req,res){

	})

	app.get('/student/news',function(req,res){

	})

	app.get('/student/news',function(req,res){

	})

	app.get('/student/news',function(req,res){

	})

	app.get('/student/news',function(req,res){

	})

}