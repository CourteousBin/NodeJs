/*
	Node运行机制:
		1.执行node的代码，把代码放入队列
		2.事件循环程序（主线程）把队列里面的同步代码都先执行了，
		3.同步代码执行完成，执行异步代码
		4.异步代码非2种状况，
		  1异步非io setTimeout() setInterval()
		   判断是否可执行，如果可以执行就执行，不可以跳过。
		  2异步io 文件操作
		   会从线程池当中去取一条线程，帮助主线程去执行。
		5主线程会一直轮训，队列中没有代码了，主线程就会退出。
		子线程：被放在线程池里面的线程，用来执行异步io操作
		    1.在线程池里休息
		    2.异步io的操作来了，执行异步io操作。
		    3.子线程会把异步io操作的callback函数，扔回给队列
		    4.子线程会回到线程池了去休息。
		    callback
		    在异步io代码执行完成的时候被扔回主线程。
		```
*/

/*
	迭代与递归
		- 迭代: 
			function likeGirl(girl){
				if(girl == '美女'){
					console.log('我喜欢')
				}
			}

			likeGril('丑');		没有反应
			likeGril('胖');		没有反应
			...					一直传参不同的参数 , 直到 likeGril('美女')

			微信小程序 发布版本 0.1.0 , 0.2.0 , 0.3.0 , ... 1.0.0
				每次一次都修改一点点bug然后发布 , 这就是迭代

		- 递归:
			f(f()) , f(f(f())) .. 递归把自己作为参数 传进去 , 也是迭代的特例		
*/

/*
	IDE 
		- 集成式开发环境 , 重量级开发工具 . 例如:webstorm 
*/

/*
	ES6
		- use strict 严格模式
			- 划分es5 还是 es3、4 的区别
			- 在node , 最好设置 严格模式
			- 后台语言是一门严谨的语言 , java 定义变量时 要存什么类型的数据都要定义
		
		保留字
			- 未来javascript 发展方向也是走严谨路线.
			- 一旦出现Unexpected strict mode reserved word这样的错误说明你用保留字做了参数名了。
			  es6-->implements, interface, let, package, private, protected, public, static, yield
			  es5-->class, enum, export, extends, import, super

		let 	  

*/

/*
	块级作用域
		- {} 被花括号包裹的代码属于一个块级作用域
		- if else 
		- 优点:不怕变量名重复
*/

