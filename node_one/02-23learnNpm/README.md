# 包的引用
	创建了一个test文件夹,里面放着  package.json index.js ,
	如何调用test文件里面的index.js?
## 创建一个test2文件夹,在文件夹里面创建   node_modules 文件夹 , 这个文件夹专门放置要被引用的包,再创建一个Index.js,
	在Index.js里面 require('test') , 这就行了
	同时 , test2 也需要一个 package.json 文件