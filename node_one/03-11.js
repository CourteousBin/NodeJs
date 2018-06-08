/*
	Cookie
		- 比喻古人的 信物
		- 有时效性
		- cookie是放在报文里面传输的
		- 无法存储大量数据
		- 安全性
*/

/*
	Session
		- session只保存在服务器端
		- session基于cookie实现
		- 服务器保存key,value对象 , 客户端只保存Key,一旦修改,就失去了映射关系
*/

/*
	Nginx
		- 代理，委托一个人帮我去做事情，上网代理，就是我上网的时候如果上网被墙了，我可以用代理帮我们去上网。
		- nginx除了是个web服务器还能够做反向代理服务器
		- 反向代理服务器的作用，可以用来做负载均衡
*/

/*
	网站优化
		- 在一个课题 , 一个思想
		- 能压缩的压缩, 能合并的合并
		- 少用for,遍历,循环
*/

/*
	http模块
		- localhost:3000 不走网卡
		- 127.0.0.1 走网卡
		- 192.168.xx.xxx 通过网卡发送请求去路由器或者交换机,再请求回你的电脑 
	
	例子:
		'use strict'

		const http = require('http');

		// 创建一个服务器
		const server = http.createServer();
		// 监听,当有请求发送到服务器触发request事件,回调request(请求对象),respnse(相应对象)
		// 文档中resqust原型是http.IncominMessage
		server.on('request',(request,response)=>{

			// 设置头部
			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

			// 报文响应
			// response.write('hello');

			// text/html头部文件
			response.write('<h1>返回格式是HTML</h1>');

			response.end();
		})
		// node默认3000 , 如果被占用可以 3001
		server.listen(3000);

	例子2:
		'use strict'

		const http = require('http');

		// 创建一个服务器
		const server = http.createServer();
		// 监听,当有请求发送到服务器触发request事件,回调request(请求对象),respnse(相应对象)
		// 文档中resqust原型是http.IncominMessage
		server.on('request',(request,response)=>{

			console.log(request.headers);

			console.log(request.httpVersion);

			console.log(request.method);

			console.log(request.url);

			response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

			response.write('<h1>返回格式是HTML</h1>');

			response.end();
		})
		// node默认3000 , 如果被占用可以 3001
		server.listen(3000);


*/
