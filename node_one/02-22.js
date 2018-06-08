/*
	global全局对象
	https://nodejs.org/api/globals.html
*/

	// var a = 123;
	// 断言 ,如果条件为false , 出现后面的语句
	// console.assert(a==1234,'如果断言为false，则将一个错误消息写入控制台。如果断言是true，没有任何反应。');

	// 作用记录运行时间 , time 与 timeEnd 传的参数要一致 , 成对出现
	// console.time('运行for循环用时');
	// for (var i = 0; i < 1000000; i++) {
	// }
	// console.timeEnd('运行for循环用时');

	// __dirname 当前文件所在的路径
	// console.log(__dirname);

	// __filename 精确到路径+文件名
	// console.log(__filename);

	// 模块化 , 在nodeJs中,一个js文件就是一个模块(module) , exports 就是暴露出接口
	// 在02-22-require引入这个模块
	var add = function(v1,v2){
		return v1+v2;
	}

	module.exports = add;
	/* 
		module 记录着这个模块的信息
	 	module.parent 调用与被调用的关系决定这谁是父节点
	 	add暴露出去,等待被调用,所以这个为 子节点 .
	 */
	// console.log(module);

	/* 
		exports后面的代码也会被暴露出去 , 在02-22require.js 执行中 , 下面代码也会被执行
		如果这个模块被 require 两次 , 123 也只会出现一次
	*/
	// console.log(123);

	/*
		exports 也是全局对象 , 在根目录引入的时候
		var obj = require('./xxx.js');
		obj.add(1,1);

		var add = require('./xxx.js').add;
		add(1,1);
	*/ 
	// exports.add = add;

	/*
		global里面的process , 用来和当前运行的nodeJs进行交互的
	*/
	// process.version 查看版本号
	// console.log(process.version);

	// process.stdout.write 就是 console.log 原型
	// process.stdout.write('123');

/*
	总结:
		nodeJs并不是一门语言, 而是一门技术
		nodeJs依赖Chrome V8 引擎
		nvm 是NodeJs 版本管理的一个工具 , 我并没有安装
		npm 是包管理 , NodeJs 自带 npm
		命令行打开NodeJs
		全局环境变量配置 其实就是 可以在命令行直接打开程序
		全局环境变量配置有两种方式 , 一种是直接写路径 , 一种是配置变量名
		变量名配置好 HOME_XXX 里面写路径 , 然后在PATH引入 %HOME_XX% , 注意% % 
		nodeJs全局函数 global 就是上面的代码
		模块化思想 , nodeJs 一个js文件就是一个模块 
*/	



/*
	模块的种类 , 在nodeJS中,模块分为两大类
	一种是核心模块 , 可以直接调用
		- 核心模块
		  + fs file system
		  + http
		  + os
		  + path
		  + querystring
		  + url
		  ...
	第二类，文件模块，用路径加载，有一种特殊的文件模块----->包，可以用名字。
	```

	在require的时候 , 建议用相对路径 , 因为/ 在linux 是表示系统根目录 , 在window /表示当前文件模块所属的根磁盘路径

	var add = require('a'); 
	nodeJs 会自动补充 a.js 或者 a.json , a.node 后缀名 , 然后判断目录中是否有该文件 , 如果找不到报错
*/

/*
	npm包管理
		包的目录结构
			package.json 必要文件,对包的描述,说明
			Bin 存放可执行二进制文件的目录
			Lib 存放JavaScript代码目录文件
			Doc 存放文档目录
			Test 存放测试代码
*/