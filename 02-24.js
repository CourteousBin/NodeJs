/*
	npm包管理
		node_modules 不只是给人看的 , 而是给 npm 给 github 给网站准备

		npm install -g 包名字 全局安装
			- 表示安装到全局 , 在全局设置了一个目录
			- 也就是说 , 只要全局安装,那么就是安装命令行工具

		npm docs jquery(包的名字)会自动打开官方文档	
		npm docs 包 会自动打开github地址 , 这个地址就是 

		npm install jquery@1.11.1 会下载@对应的版本

		npm root -g 查看全局包安装路径

		npm config set prefix 修改全局安装目录
			- 建议去文件里面修改路径 , C:/users/用户名 里面有一个 .npmrc文件 (我找不到)
			- 修改prefix = c:/dev/npm (写你的路径)
			- 去全局环境变量把新路径写进 Path 里面

		npm list 查看当前目录下的包

		npm list -g 查看全局目录下的包

		npm包名字是唯一的
		
		dependencies 
		   -  包名：“版本号” 
		   -  > +版本号   下载大于某个版本号，npm会下最新版
		   -  < +版本号   下载小于某个版本号，npm会下小于这个版本号最新版
		   -  <= 小于等于 一定会下你写的这个版本，除非没有你写的这个版本
		   -  >= 大于等于  下载最新版
		   -   *、" "、X  任意 npm会给你下最新版
		   -   ~ +版本号  会去下约等于这个版本的最新版，在大版本不变的情况下下一个比较新的版本
		   -   ^ +版本号  不跃迁版本下载，^2.1.0 npm会下载大版本不变，去下载2.x.x版本里的最近版
		
*/