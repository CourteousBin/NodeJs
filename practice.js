/*

	- require
		- 加载用户自己编写的模块
			- 相对路径必须加 "./" , 否则报错
			- case {
					console.log('star');

					// 加载马上执行 , 执行顺序 先执行 加载模块里面的代码
					require('./node_two/01-a.js');

					console.log('end');

					// 结果 star -> 01-a.js -> end
			}
		- 在node中 , 并没有全局作用域 只有模块作用域 
			- 也可以说是文件作用域 , 超出文件范围 , 变量 , 方法都不管用
			- 每个模块互不干扰
				- case {
					// 1
						var foo = 'a';

						require('./node_two/01-b.js');	// var foo = 'b';

						console.log(foo);	// a

					// 2
						var foo = 'a';

						// 定义一个方法 , 测试01-b.js 能否执行
						function add(x,y){
							return x+y
						}

						console.log(add(10,5));

						require('./node_two/01-b.js');	// add(1,1);

						// 01-b.js 直接报错 , 证明没有全局作用域
				}
		- require有两个作用
			- 加载文件模块并执行代码
			- 拿到被加载文件模块导出的接口对象
				- 在每个文件模块中都提供了一个对象:exports
				- 默认 exports 是一个空对象
				- Case {

					// case1
						// 01-a.js
							// console.log(exports); // {} 空对象

						var res = require('./node_two/01-a.js');

						console.log(res); // 空对象

						// exports 返回空对象 , require 也是空对象 , 证明 两个是关联的
					
					// case2
						// 01-a.js
							// exports.foo = 'hello';

						var res = require('./node_two/01-a.js');

						console.log(res.foo); // hello

						// res 接受到的 foo 是一个对象

					// case3
						// 01-a.js
							// exports.add = function(x,y){
								// return x+y
							// };

						var res = require('./node_two/01-a.js');

						console.log(res.add(1,1)); // 2

						// res 接受到的 foo 是一个方法
	
				}

	- 乱码
		- 	
*/

var http = require('http')
var server = http.createServer()

server.on('request',function(req,res){
	// 在服务端默认发送的数据 是 utf8 编码
	// 但是浏览器不知道你是 utf8
	// 浏览器不知道服务器相应内容编码的情况下会默认使用当前操作系统的 默认编码
	// 中文操作系统默认编码 gbk
	// 解决办法 正确的告诉浏览器 服务器发送的数据是什么编码格式
	res.setHeader('Content-Type','text/plain;charset=utf-8')
	res.end('你好')
})

server.listen(3000,function(){
	console.log('running...')
})