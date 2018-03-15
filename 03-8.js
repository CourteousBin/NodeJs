/*
	Node Stream 流
		- 流的重要性:
			- 举个例子, 如果打开一个2G的文件, 用buffer模式就是先分配2G的内存, 把文件全部读出来, 然后开始操作内存。
			  而用流模式的方法就是边读数据, 边开始处理.

			- 从这里看出stream模式无论是在空间和时间上都优于buffer模式:
			  在空间上, 内存只会占用当前需要处理的一块数据区域的大小, 而不是整个文件.
			  在时间上, 因为不需要全部的数据就可以开始处理, 时间就相当于节约了。
			  从串行变成了并行操作(这里的并行不是多线程的并行, 而是生产者和消费者并行).

	
		例子:
			const fs = require('fs');
			const rs = fs.createReadStream('./1.doc');
			const ws = fs.createWriteStream('./2.doc');

			// 监听事件	
			rs.on('data',(chunk)=>{
				// chunk 就是我们读到的一小块文件
				console.log(chunk.length);
				ws.write(chunk);
			})

			// 监听事件
			rs.on('end',(chunk)=>{
				console.log('结束了');

				ws.end();
			})
		
		做一个百分比的例子:

			'use strict'
			const fs=require('fs');
			//读文件的流
			const rs = fs.createReadStream('./1.doc');
			//写文件流
			const ws = fs.createWriteStream('./2.doc');

			//取文件相对应的stats对象
			var stats= fs.statSync('./1.doc');
			//文件大小
			 var count=stats.size;
			 console.log(count);
			//rs.pipe(ws);
			//传输的文件传了多少
			var data=0;
			//chunk是一个buffer
			rs.on('data',function(chunk){

			    //每得到一个chunk（buffer）,取一次长度并且加到data的值里面去
			    data=data+chunk.length;
			    console.log(data);
			    console.log("传输进度"+parseInt(data/count*100)+"%");
			    ws.write(chunk);

			})

			rs.on('end',function(){

			console.log("读取结束");
			ws.end();

			})
*/

/*
	网络编程
		- linux 服务器系统
		- windowServer 服务器系统
		- centos是Linux桌面操作版
		- 服务器为什么多人使用 Linux系统 ?
			简单,节省资源,windowServer会占用大量资源
			服务器是提供服务的,桌面操作会浪费大量资源
		- 服务器应用软件
			apache , 为外界提供服务的一款软件
			提供web服务,对内提供web应用程序的运行环境	

		- Node没有web服务器
			- 如果我用js写了一个web应用程序，那么node就是web服务器
			- .net平台的 ASP或者ASP.net 需要 IIS 作为服务器容器，
			- PHP需要搭载 Apache 或者 Nginx 作为服务器容器，
			- Java 的 JSP 需要 tomcat 作为服务器容器，
			- ruby 的 ruby on rails 需要 搭配 Apache 等作为自己的服务器容器。。。
			- Node，不需要服务器容器。	
			- Node本身就是服务器容器;

		- Node
			- Node是一个面向网络而生的平台。

			- Ryan Dahl 在创建Node项目的时候给它起了一个名字叫做 web.js ，就是一个Web服务器。
				类似于 Apache、tomcat、IIS 等服务器软件。

			- web.js 的发展超出了作者的最初想法，变成了构建网络应用的一个基础平台。
				然后就可以在这个基础平台之上构建很多东西，比如服务器、客户端、各种各样的命令行工具等。

			- Node的目标就是成为一个构建快速、可伸缩的网络应用平台。

			- 每一个Node进程构成网络应用中的一个节点。这就是 Node 的含义。	

		- IP	
			- ip唯一标识,一台设备
			- 端口号标识一个设备上的应用

		- 跨域
			- 域名不同
			- 域名一致,端口号不一样	

		- 做项目与做产品公司的区别
			- 做产品:靠产品盈利
			- 做项目:解决客户需求	

		- 网络协议
			- 网络之间传输数据协议 
				- 物理层 (网线)	
				- 数据链路层 (局域网)
				- 网络层 (IP)
				- 传输层(TCP)
				- 应用层 (http协议邮箱协议 ,发送文件协议 等待协议)
*/
