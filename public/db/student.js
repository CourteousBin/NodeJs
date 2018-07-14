/*
	数据操作模块
	职责:
		操作文件中的数据 , 只处理数据 不关心业务
*/

/*
	知识点:
		- 回调函数
		- 作用
			- 获取异步从操作的结果
			- Case {
				function fn(callback){
					setTimeout(function(){
						var data = 'hello'
						callback(data)
					}, 1000);
				}

				// 如果需要获取一个函数中异步的操作结果,必须要通过回调函数来获取
				fn(function(data){
					console.log(data);
				})
			}
*/


var fs = require('fs')
var dbPath = './public/db/curdDb.json';
// 获取所有学生列表
exports.find = function(callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err)
		}
		callback(null,JSON.parse(data).students)
	});
}

// 根据id查找信息
exports.findById = function(id,callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err)
		}
		var students = JSON.parse(data).students

		var ret = students.find(function(item){
			return item.id === parseInt(id)
		})

		callback(null,ret)
	});
}

// 添加学生
exports.save = function(student,callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err)
		}

		// 读取json文件
		var students = JSON.parse(data).students

		// 处理 id 唯一性
		student.id = students[students.length-1].id + 1

		// 追加新数据
		students.push(student)

		// 把新数据转换为字符串
		var result = JSON.stringify({
			students:students
		})

		// 写进json文件
		fs.writeFile(dbPath, result, function(err){
			if(err){
				return callback(err)
			}
			// 执行回调
			callback(null)
		});
	});
}
// 更新学生
exports.updateById = function(){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err)
		}
		var students = JSON.parse(data).students

		student.id = parseInt(student.id)

		// ES6 find,接受函数作参数
		// 当某个遍历相符合条件 find 会终止遍历 同时返回遍历项
		var stu = students.find(function(item){
			return item.id === student.id
		})

		// 遍历拷贝对象
		for(var key in student){
			stu[key] = student[key]
		}

		// 把新数据转换为字符串
		var result = JSON.stringify({
			students:students
		})

		// 写进json文件
		fs.writeFile(dbPath, result, function(err){
			if(err){
				return callback(err)
			}
			// 执行回调
			callback(null)
		});
	});
}
// 删除学生
exports.deleteById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    var students = JSON.parse(data).students

    // findIndex 方法专门用来根据条件查找元素的下标
    var deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id)
    })

    // 根据下标从数组中删除对应的学生对象
    students.splice(deleteId, 1)

    // 把对象数据转换为字符串
    var fileData = JSON.stringify({
      students: students
    })

    // 把字符串保存到文件中
    fs.writeFile(dbPath, fileData, function (err) {
      if (err) {
        // 错误就是把错误对象传递给它
        return callback(err)
      }
      // 成功就没错，所以错误对象是 null
      callback(null)
    })
  })
}
