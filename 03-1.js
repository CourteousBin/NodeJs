/*
	文件的读取:
	fs.readFile(path[, options], callback)	异步方法
	fs.readFileSync(path[, options])		同步方法

	同步方法与异步方法的区别:

	回调函数一般都是异步方法:
	fs.readFile('./02-22.js','utf8',(err,data)=>{
		回调函数
	})
	
	同步方法一般是返回出去
	var data = fs.readFileSync('./02-22.js','utf8');

	
	var fs = require('fs');

	// 第一个是参数路径 , 第二个是编码格式 , 第三个是回调函数
	fs.readFile('./0222-22.js','utf8',(err,data)=>{

		console.log(data);

		// 在node中 , 就算出现err 也只是一个对象形式出现 ,不会停止程序(报错)
		// 解决办法 , throw 抛出错误
		if(err) throw err;

	})
*/

/*
	判断路径是否正确 , 文件是否存在:
	fs.access(path[, mode], callback)
	fs.accessSync(path[, mode])
		- 不光可以判断文件 , 还可以判断文件夹


	var fs=require('fs');

	// 第一个参数是路径,第二个参数考虑 liunx 系统 , window不考虑 ,第三个返回布尔值
	fs.access('./02-22.js',(err)=>{
		// console.log(err?'no access':'can read/write');

		// 如果没有出错 读取文件 , callback函数是可以嵌套 , 异步再异步
		if(err){
			throw err;
		}else {
			fs.readFile('./02-22.js', 'utf8', (err,data)=>{
				console.log(data);
			});
		}
	});


	练习 03.1
*/

/*
	MVVM 与 MVC
	angularJS 是用 MVVM 数据结构
		- m Module
		- v View
		- vm View-Module($scope)

	双向数据绑定

*/

/*
	复习

	require
		- 把代码从文件读取 , 用匿名函数方式头尾包装,返回modules.exports对象,暴露出想要暴露的属性.
		- exports 是指向 modules.exports的一个指针,exports能做的,modules.exports 都能做
		- .js .node .json 会帮你依次补充
		- 第二次加载的时候优先从缓存中查找
		- node_modules中没有没有引入的包 , 会从父文件中查找 , 如果没有 , 直到根目录

	module
		- 里面保存了模块的信息(路径,父子信息,暴露出对象的信息)
		- 谁是入口文件 谁最大	

*/