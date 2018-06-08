/*
	Node劣势
		- 不适合做大量 耗费cpu 运行的计算 
		- 计算类 , 高CPU 运行 同步会比异步更适合	
*/

/*
	模拟练习
		- 配菜员做什么事情 1:配餐员 2:盯着炸薯条
		- 我做什么事情 , 1:吃
		- 证明在 异步函数中 callback 回调函数是极其重要


		//  配餐员
	var dosomething = (callback)=>{

		setTimeout(function(){
			var food = "炸薯条";
			callback(food);
		}, 10000);

		console.log('配餐');
		console.log('配餐');
		console.log('配餐');

	}

	// 我
	var eat = (food)=>{
		console.log('吃'+food);
	}
	dosomething(eat);	

*/

/*
	文件操作复习

		var fs = require('fs');
		// 如果没有 设置编码 格式 会出现 机器语言(二进制)
		fs.readFile('./02-22.js', 'utf8', (err,data)=>{
			console.log(data);
		});


		var fs = require('fs');
		// 判断是否有此文件
		fs.access('./02-22.js',(err)=>{
			if(err){
				throw err;
			}else {
				fs.readFile('./02-22.js', 'utf8', (err,data)=>{
					console.log(data);
				});
			}
		});
	
*/

/*
	异常处理
		- 计算机不能处理的状况为异常
		- fs.access('./02-22.js',(err)=>{}) 这个抛出来的异常是一个 对象
			异常对象 和其他数据 没有任何区别, 程序继续执行
		- 同步代码中 , 一出现异常直接报错	, 程序终止执行

	try catch 
		- 调试异常 , 只能调试 同步代码!!	
		var fs = require('fs');
		try {
			fs.accessSync('022-22.js');
		} catch(err) {
			console.log(err);
		}

	错误对象
		- 掌握了错误对象 , 有时候写代码 我们可以自己定义错误提示

		var err = new Error('错误提示对象');

		console.log(err);

		console.log('可我并没有停止执行下面的代码');

*/

/*
	fs.writeFile(file, data[, options], callback)
	fs.writeFileSync(file, data[, options])
		- 编辑内容模块
		- 第一个参数是路径 , 第二个参数是内容 , 第三个编码格式 , 第四个回调函数
		- 如果原本有内容 , 那么会把内容覆盖
		- 文件不存在的时候会创建文件 , 但是不会创建文件夹


	// 第一个参数是路径 , 第二个参数是内容 , 第三个编码格式 , 第四个回调函数
	fs.writeFile('./write.txt', 'hello world', 'utf8', (err)=>{

	});	
*/

/*
	fs.mkdir(path[, mode], callback)
	fs.mkdirSync(path[, mode])
		- 创建文件夹
		- 在看nodeJs文档中 ,如果有一些API没有多余的解释 ,
			并不是作者懒 , 而是 linux 命令 , 作者认为 会NodeJs的人一定会 Linux	

	var fs = require('fs');
	fs.mkdir('./node创建出来的文件夹', (err)=>{
		
	});	

*/

/*
	练习
		- 创建一个文件夹然后写文件,最后读取文件

	var fs = require('fs');

	fs.mkdir('fs_Test', (err)=>{
		fs.writeFile('./fs_Test/fs_write.txt', '练习:创建一个文件夹然后写文件,最后读取文件', 'utf8', (err)=>{
			fs.readFile('./fs_Test/fs_write.txt', 'utf8', (err,data)=>{
				console.log(data);
			});
		});
	});	
*/

/*
	fs.readdir(path[, options], callback(err,files))
	fs.readdirSync(path[, options])
		- 读取文件夹
		- files 以数组形式呈现

	var fs = require('fs');
	// files 以数组形式呈现
	fs.readdir('./fs_Test',(err,files)=>{
		console.log(files);
	});	
*/

/*
	fs.stat(path, callback(err,stats))
	fs.statSync(path)
		- 判断文件是否纯在 , 也可以判断文件夹是否存在
		- stats是一个对象,里面还有方法可以调用
			- stats.isFile()									判断是否为文件
			- stats.isDirectory()								判断是否为文件夹
			- stats.isBlockDevice()
			- stats.isCharacterDevice()
			- stats.isSymbolicLink() (仅对 fs.lstat() 有效)
			- stats.isFIFO()
			- stats.isSocket()


	var fs = require('fs');
	fs.stat('./fs_Test',(err,stats)=>{

	if(stats.isFile()){
		console.log('是文件');
	}else{
		console.log("不是文件");
	}

	if(stats.isDirectory()){
		console.log('是文件夹');
	}else{
		console.log("不是文件夹");
	}
	

	练习
		- 读取文件夹,判断文件夹的内容是文件还是文件夹


	var fs = require('fs');
	fs.readdir('./fs_Test',(err,files)=>{
		for(var i = 0;i<files.length;i++){
			
			var resutl = fs.statSync('./fs_Test/'+files[i]);
			if(resutl.isFile()){
				console.log(files[i] + '是文件');
			}else {
				console.log(files[i] + '是文件夹');
			}
		}

		
	});	
})		
*/	

/*
	核心模块 path
	
	path.join
		- 拼接字符串的时候,无法确定 ./02-22.js  还是 02-22.js 
			那么用path.join()可以自动判断 , 生成一个正确的路径

	var path = require('path');
	console.log(path.join(__dirname,'02-22.js'));

*/

/*
	在Node中 , 核心模块就两个重要
		- 一个是 fs模块 另外一个是 Http 模块

	NodeJs 大量的 i/o 操作 , 其实就是对 fs模块 的 操作
*/