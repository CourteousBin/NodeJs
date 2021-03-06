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
			- demo {
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
			}

		- nodemon 
			- 更改代码自动刷新,不再需要手动刷新
			- ctrl + s 保存后自动刷新	

		- express + art-template
			- Case {
					var express = require('express');

					var app = express();

					// 配置 art-tempalte 模板引擎
					// 第一个参数表示,当渲染以 .art 结尾的文件时候,使用 art-tempate 模板引擎
					// app.engine('art', require('express-art-template'));

					// 也可以配置成 Html
					app.engine('html', require('express-art-template'));

					// Express 为 Respnse 响应对象提供了一个方法: render
					// render 方法默认是不可以使用,但是如果配置了模板引擎就可以使用
					// res.render('模板名',{模板数据})
					// 模板名 不能写路径 , 默认会去项目中 views 目录查找模板文件
					app.get('/', function (req, res) {
					    res.render('404.art', {
					        user: {
					            name: 'aui',
					            tags: ['art', 'template', 'nodejs']
					        }
					    });
					});

					app.get('/admin', function (req, res) {
					    res.render('admin/admin.html', {
					        title: '管理系统'
					    });
					});

					app.listen(3000,function(){
						console.log('app is runing at port 3000');
					})
			}

			- post {
					var express = require('express');

					var bodyParser = require('body-parser');

					var app = express();

					app.use('/public/',express.static('./public/'));

					app.engine('html', require('express-art-template'));

					// 配置 post
					app.use(bodyParser.urlencoded({ extended: false }));
					app.use(bodyParser.json());

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
					];

					app.get('/', function (req, res) {
					    res.render('index.html', {
					        comments:comments
					    });
					});

					// 路劲
					app.get('/post', function (req, res) {
						res.render('post.html')
					});

					// 获得表单信息
					app.post('/post', function (req, res) {
						var comment = req.body

					    comment.dateTime = '2018年6月18日17:23:33'

					    comments.unshift(comment)

					    res.redirect('/')
					});

					app.listen(3000,function(){
						console.log('app is runing at port 3000');
					})	
			}	

			- curd
				Case {
						// app.js 入门模块
						// 职责:
						// 创建服务
						// 做一些服务配置
							// 模板引擎
							// Body-parser 解析表单 post
							// 提供静态资源服务
						// 挂载路由
						// 监听端口启动服务 
					var express = require('express')

					var bodyParser = require('body-parser');

					var app = express()

					// 路由模块，自己写的独立模块
					var router = require('./router.js')

					// 开发静态资源
					app.use('/node_modules/', express.static('./node_modules/'))
					app.use('/public/', express.static('./public/'))

					app.engine('html', require('express-art-template'))

					// 配置 post
					app.use(bodyParser.urlencoded({ extended: false }));
					app.use(bodyParser.json());

					// 原生路由
						// 传参，因为独立模块需要使用到 express
						// router(app)

					// Express 方法
						// 把路由容器挂载到 app 中
						app.use(router)

					app.listen(3000, function() {
					    console.log('app is runing at port 3000')
					})


				}

		
		- MongoDB
			- case {
				// 官方DEMO
					const mongoose = require('mongoose');

					// 链接数据库
					mongoose.connect('mongodb://localhost/test');

					// 创建一个模型,就是在设计数据库, mongodb 只需要在代码中设计数据库就可以了
					const Cat = mongoose.model('Cat', { name: String });

					// 实例化一个 cat
					const kitty = new Cat({ name: 'Zildjian' });

					// 持久化保存 kitty 实例
					kitty.save().then(() => console.log('meow'));	
			}
			
			- 增删改查
			- case {
					var mongoose = require('mongoose')

					// 设计表结构
					var Schema = mongoose.Schema

					// 链接数据库
					mongoose.connect('mongodb://localhost/test')

					// 设计表结构
					// 字段名称就是表结构中属性名称
					// 约束的目的是为了保证数据的完整性 不能有脏数据
					var blogSchema = new Schema({
					    title: {
					        type: String,
					        required: true // 约束 , 必填项
					    },
					    author: String,
					    body: String
					})

					// 将文档结构发布为 模型
					// 第一个参数 用来表示数据库名称 , mongoose 会将大写名词 转换成 小写复数 
					// BLog -> blogs
					// 第二个参数就是架构
					// 返回值是模型构造函数
					var Blog = mongoose.model('Blog', blogSchema);


					// 新增数据
					var article = new Blog({
						title:'学习node',
						author:'test',
						body:'node'
					})

					article.save(function(err,ret){
						if(err){
							console.log('失败');
						}else{
							console.log(ret);
							console.log('成功');
						}
					})

					// 查询数据 
						// 查询所有
						Blog.find(function(err, ret) {
						    if (err) {
						        console.log('失败');
						    } else {
						        console.log(ret);
						    }
						})

						// 按条件查询
							// find 返回是一个数组
							// findOne 返回的是一个对象
						Blog.findOne({author:'Bin,'},function(err,ret){
							console.log(ret);
						})	


					// 删除数据 
						Blog.remove({
							author:'test'
						},function(err,ret){
							if(err){
								console.log('删除失败');
							}else{
								console.log(ret);
							}
						})

					// 更新数据库
						Blog.findByIdAndUpdate('5b4b1f7c3d822f32606de4f2',{
							title:'更新数据库'
						},function(err,ret){
							console.log(ret);
						})


			}		
*/

// Promise

// ES6 一个 API
// promise 是一个构造函数

var fs = require('fs')

// 创建一个容器
var p1 = new promise(function(resolve,reject){
	fs.read('./a.txt','utf8',function(err,data){
	  if(err){
	  	reject(err)
	  }else {
	  	resolve(data)
	  }
	})
})
