/*
	引入模块练习
*/
	// require 也是global 里面的其中一个
	var add = require('./02-22.js');
	
	
	console.log(add(1,2));	
	
	/* 
		module 这个对象包含着许多信息
		这个模块调用了 add , 所以是根 , 或者父节点
		打印出可以看到children 是 02-22.js
		id为 "." 证明这个是根目录
	*/
	// console.log(module);

	/*
		引入两次模块,node并不会真正在硬盘导入两次
		第一次时,先在硬盘导入模块到缓存里面 , 第二次使用的时候是直接在缓存里面读取
		并不会出现 两个 123 , 但是ad2(1,1)的结果会被打印出来
	*/
	var ad2 = require('./02-22.js');
	console.log(ad2(1,1));