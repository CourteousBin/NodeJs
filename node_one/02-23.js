/*
	npm包管理
		包的目录结构
			package.json 必要文件,对包的描述,说明
			Bin 存放可执行二进制文件的目录
			Lib 存放JavaScript代码目录文件
			Doc 存放文档目录
			Test 存放测试代码

	其中,index.js 和 package.json 都是必要的文件
		pakcage.json目录结构
			name - 包的名称
			description - 包的简介
			version - 包的版本号
			keywords - 关键字 , 用于npm分类搜索
			author - 作者信息
			main - 配置包的入口 , npm会通过模块根目录下的Index.js
			dependencies - 包的依赖项,npm会通过该属性自动加载包
			scripts - 指定运行脚本命令的npmm命令

	初始化npm的时候会有提示辅助完成 packages.json , 在命令行输入 npm init

	npm的调用
		npm包含 index.js package.json
		要调用时候 , 创建一个文件夹,里面必须要有 node_modules , 把要调用的npm包放进去
		再文件夹创建一个Index.js , 直接require('xxx') , xxx指向包名 , 同时也要创建一个 package.json

		在package.json 配置依赖包的时候 ,如果 本地没有 , 直接 在当前文件夹打开命令行 输入 npm install


	npm :基于包的规范实现的一个包管理工具

		- npm install 包名

		当执行npm install的时候，它会自动跑到npm的网站，然后找到该包的github地址，
		找到之后，下载这个压缩包，然后在执行npm install的当前目录下找一个叫做node_modules目录
		如果找到，直接解压这个压缩包，到node_modules目录下
		如果找不到，则新建一个node_modules目录，解压到该目录
		- npm install -g 包名
		   表示全局安装   
		   npm在安装的时候，在全局设置了一个安装目录，只要是全局安装就会把包安装到这个目录里面去
		   npm install -g 包名 只要是全局安装就是安装命令行工具

		- npm install 缩写 npm i

		当执行npm install的时候，会自动在当前目录中查找package.json文件
		如果找到，找里面的 dependencies 字段，安装该字段中所有依赖的项
		- npm docs 包名
		  通风这个命令打开 包相对应的文档
		- npm install --save 生产环境
		npm i -S jquery@3.*
		咱们以后在做项目的时候，先初始化一个package.json文件，
		在安装第三方包依赖的时候，必须使用npm install --save express,添加依赖项到package.json文件中，
		实际就是添加到dependencies字段中

		- npm install -save-dev 开发环境
		npm i -D jquery@3.*
		咱们以后在做项目的时候，先初始化一个package.json文件，
		在安装第三方包依赖的时候，必须使用npm install --save express,添加依赖项到package.json文件中，
		实际就是添加到devDependencies字段中


		- npm config set prefix  修改全局安装目录
		  不建议使用，建议去文件夹里面改 C:\Users\用户名  里面有一个 .npmrc文件 
		  去里面改prefix = C:\dev\npm  （写你的路径）
		  去全局的环境变量path里把C:\dev\npm  路径加进去	
*/