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
		- Case {
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
		}

	- javascript代码规范
		- https://standardjs.com/readme-zhcn.html
		- 采用无分号代码风格注意:

	- 模仿 Apache 路径加载
		- Case {
					var http = require('http')
					var fs = require('fs')
					var server = http.createServer()
					server.on('request',function(req,res){

						var url = req.url;

						if (url === '/'){
							fs.readFile('./node_two/show.html', function(err,data){
								if (err){
									// return 有两个作用:
										//1.返回值
										//2.阻止代码继续执行
									return res.end('404 Not Found.')
								}

								res.setHeader('Content-Type','text/html;charset=utf-8')

								res.end(data)
							});
						}else if(url === '/login.html'){
							fs.readFile('./node_two/showTwo.html', function(err,data){
								if(err){
									return res.end('404 Not Found')
								}

								res.end(data)
							});
						}

					})

					server.listen(3000,function(){
						console.log('running...')
					})	
		}

	- 模仿 Apache 检索页面
		- Case {
				var http = require('http')
				var fs = require('fs')
				var server = http.createServer()
				var wwwDir = 'C:/Users/Administrator/Desktop/nodeGit/NodeJs/node_two';
				server.on('request',function(req,res){
					var url = req.url
					fs.readFile('node_two/template.html', function(err,data){
						if (err) {
					      return res.end('404 Not Found.')
					    }

					     fs.readdir(wwwDir, function (err, files) {
					     	if (err) {
						        return res.end('Can not find www dir.')
						      }

						    var content = '';

						    files.forEach(function (item) {
					        // 在 EcmaScript 6 的 ` 字符串中，可以使用 ${} 来引用变量
					        content += `
					          <tr>
					            <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
					            <td class="detailsColumn" data-value="0"></td>
					            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
					          </tr>
					        `
					      })

						     // 2.3 替换
						      data = data.toString()
						      data = data.replace('^_^', content)

						      // 3. 发送解析替换过后的响应数据
						      res.end(data)
					     })
					});


				})

				server.listen(3000,function(){
					console.log('running...')
				})
	
		}

	- 模板文件 `art-template`
		- 模板文件诞生于服务器端，后来才发展到前端
			- Case {
					var template = require('art-template');
					// 在前端使用 
					// templage('script标签Id',{对象})

					// 在node使用 , 简单demo
					var result = template.render('hello {{ name }}',{
						name:'Bin'
					})

					console.log(result);
			}
		- 在 NodeJs 使用 art-template
			- case {
					var template = require('art-template');
					var fs = require('fs');

					fs.readFile('./node_two/tpl.html', function(err,data){
						if(err){
							return console.log('读取文件失败');
						}

						// readFile读取的是二进制数据，模板文件需要的是字符串，进行转换
						// data.toString
						var result = template.render(data.toString(),{
							name:'Bin',
							age:21,
							province:'广东',
							hobbies:[
								'代码'
							]
						})

						console.log(result);
					});
			}
		- 在模仿 Apache 使用模板文件
			- Case {
				var http = require('http')
				var fs = require('fs')
				var server = http.createServer()
				var wwwDir = 'C:/Users/Administrator/Desktop/nodeGit/NodeJs/node_two';
				var template = require('art-template');

				server.on('request',function(req,res){
					var url = req.url
					fs.readFile('./node_two/template-apache.html', function(err,data){
						if (err) {
					      return res.end('404 Not Found.')
					    }

					     fs.readdir(wwwDir, function (err, files) {
					     	if (err) {
						        return res.end('Can not find www dir.')
						      }

						    var htmlStr = template.render(data.toString(),{
						    	title:'art-template',
						    	position:wwwDir,
						    	files:files
						    })  
						   	

					      // 3. 发送解析替换过后的响应数据
					     	res.end(htmlStr)
					     })
					});


				})

				server.listen(3000,function(){
					console.log('running...')
				})
			}	
	- 留言案例
		- url 模块
			- case {
				var url = require('url')

				// 获得form表单提交的的内容 , 如果第二个选项为true , query会变成一个对象
				var obj = url.parse('/getMethod?name=Bin,&message=nodeAPI学习',true);
				console.log(obj);

				Url {
				  protocol: null,
				  slashes: null,
				  auth: null,
				  host: null,
				  port: null,
				  hostname: null,
				  hash: null,
				  search: '?name=Bin,&message=nodeAPI学习',
				  query: { name: 'Bin,', message: 'nodeAPI学习' },
				  pathname: '/getMethod',
				  path: '/getMethod?name=Bin,&message=nodeAPI学习',
				  href: '/getMethod?name=Bin,&message=nodeAPI学习' 
				}
			}
		- 综合练习
			- Case {
					var http = require('http')
					var fs = require('fs')
					var template = require('art-template')
					var url = require('url')

					var comments = [
					{
					  name:'a',
					  message:'test',
					  dateTime:'2018-6-18'
					},
					{
					  name:'a',
					  message:'test',
					  dateTime:'2018-6-18'
					},
					{
					  name:'a',
					  message:'test',
					  dateTime:'2018-6-18'
					},
					{
					  name:'a',
					  message:'test',
					  dateTime:'2018-6-18'
					},
					]

					http.createServer(function(req,res){
					  // 将路径解析为对象,第二个参数为true,字符串转换为对象
					  var parseObj = url.parse(req.url,true)
					  // 获取单独不包含查询字符串的路劲部分
					  var pathname = parseObj.pathname
					  if (pathname === '/'){
					    fs.readFile('views/index.html', function(err,data){
					      if (err){
					        return res.end('404')        
					      }
					      var html = template.render(data.toString(),{
					        comments:comments
					      })
					      res.end(html)
					    });
					  }else if(pathname === '/pinglun'){
					    // res.end(JSON.stringify(parseObj.query))

					    var comment = parseObj.query

					    comment.dateTime = '2018年6月18日17:23:33'

					    comments.push(comment)

					    // 如何让客户端重定向?
					      // 1.状态码设置302
					      // 2.在响应头通过 location 重定向
					      // 如果客户端收到服务器响应 302 就会自动去 location 找重定向
					    res.statusCode = 302;
					    res.setHeader('Location','/')
					    res.end() 

					  }else if(pathname === '/post'){
					    fs.readFile('./views/post.html',function(err,data){
					      if(err){
					        return res.end('404')
					      }
					      res.end(data)
					    })
					  }else {
					    fs.readFile('./views/404.html',function(err,data){
					      res.end(data)
					    });
					  }
					}).listen(3000,function(){
					  console.log('running');
					})
			}	

		- Express 

		
*/
var express = require('express')
// 创建服务 http.createServer
var app = express()

app.get('/',function(req,res){
	res.send('hello express')
})

app.get('/about',function(req,res){
	res.send('hello about')
})

// 公开目录,让用户可以访问到里面的资源
app.use('/public/',express.static('./public/'))

app.listen(3000,function(){
	console.log('app is runing at port 3000');
})