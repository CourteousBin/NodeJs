// 原生 node 模块化
// // 要运用到 fs系统 模块
// var fs = require('fs')

// // 导出方法
// module.exports = function(app){


// 	app.get('/', function(req, res) {
// 		// 第二个参数是可选的,读取的文件按照 utf8 编码
// 		fs.readFile('./public/db/curdDb.json','utf8',function(err,data){


// 			res.render('./curd/index.html', {
// 		        fruits: [
// 		            '苹果',
// 		            '香蕉',
// 		            '菠萝',
// 		            '西瓜'
// 		        ],
// 		        students: [
// 					{"id":1,"name":"bin","gender":0,"age":"21","hobbies":"篮球"},
// 					{"id":2,"name":"bin","gender":0,"age":"21","hobbies":"足球"},
// 					{"id":3,"name":"bin","gender":0,"age":"21","hobbies":"排球"},
// 					{"id":4,"name":"bin","gender":0,"age":"21","hobbies":"羽毛球"},
// 					{"id":5,"name":"bin","gender":0,"age":"21","hobbies":"兵乓球"},
// 					{"id":6,"name":"bin","gender":0,"age":"21","hobbies":"马拉松"},
// 					{"id":7,"name":"bin","gender":0,"age":"21","hobbies":"写代码"},
// 				]
// 		    })
// 		})

// 	})

// }

// Express 封装路由

/**
 * router.js 路由模块
 * 职责:
 * 	处理模块
 * 模块职责要单一
 * 模块化的目的就是增强项目可维护性
 */
var fs = require('fs')

var express = require('express')

// 加载数据库操作方法
var Students = require('./public/db/student.js')

// 1.创建一个路由容器
var router = express.Router()

// 2.把路由都挂载在 router 容器中
router.get('/students', function(req, res) {

    // 第二个参数是可选的,读取的文件按照 utf8 编码
    // fs.readFile('./public/db/curdDb.json', 'utf8', function(err, data) {

    //     function stripBOM(content) {
    //         if (content.charCodeAt(0) === 0xFEFF) {
    //             content = content.slice(1);
    //         }
    //         return content;
    //     }

    //     var students = JSON.parse(data)

    //     res.render('./curd/index.html', {
    //            fruits: [
    //                '苹果',
    //                '香蕉',
    //                '菠萝',
    //                '西瓜'
    //            ],
    //            students: students
    //        })
    // })

    Students.find(function(err,students){

    	if(err){
    		return res.status(500).send('server error')
    	}
    	res.render('./curd/index.html', {
           fruits: [
               '苹果',
               '香蕉',
               '菠萝',
               '西瓜'
           ],
           students: students
       })
    })
})

router.get('/students/new', function(req, res) {
    res.render('./curd/new.html')
})

router.post('/students/new', function(req, res) {
    // 1.先获取表单数据
    Students.save(req.body,function(err){
    	if(err){
    		return res.status(500).send('server error')
    	}
    	res.redirect('/students')
    })
    // 2.处理
    // 3.响应
})

router.get('/students/edit', function(req, res) {
	Students.findById(parseInt(req.query.id),function(err,student){
		if(err){
			return res.status(500).send('server error')
		}

		res.render('./curd/edit.html',{
			student:student
		})
	})
})

router.post('/students/edit', function(req, res) {
	Students.updateById(req.body,function(err){
		if(err){
			return res.status(500).send('server error')
		}
		res.redirect('/students')
	})
})

router.get('/students/delete', function (req, res) {
  // 1. 获取要删除的 id
  // 2. 根据 id 执行删除操作
  // 3. 根据操作结果发送响应数据

  Student.deleteById(req.query.id, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})

// router.get('/students/news',function(req,res){

// })

// router.get('/students/news',function(req,res){

// })

// 第三步 把 router 导出
module.exports = router