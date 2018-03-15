/*
	i/o
		- input/output 就是输入/输出
		- 一个设备的输入输出能轻而易举 , 但是海量的数据就相当的复杂
		- node 适合做 大量i/o 访问的事情
		- 并发:同一个时间段运行程序 , 从开始到结束
		- 进程 为运行当中的应用程序提供环境
		- 线程 用来执行应用程序中的代码 , 一个线程同一时间只能做一件事情
		- 多线程 如果一个数学老师讲课 , 语文老师也过来讲课 , 那么听谁讲 , 多线程有一个锁 , 一个线程处理完 再释放

	同步与异步
		- 同步会阻塞后面的代码
		- 异步不会阻塞后面的代码	
		- 异步方法有 ajax , setTimeout(function(){},1000) , 异步一定是后执行的
			如果有几个同步方法,有几个异步方法,那顺序该如何执行?
				首先会执行同步方法,异步方法看条件而执行, 没有一个绝对的顺序
				只有callback才能排序

	异步i/o 与 异步非i/o操作
		- setimeout setIntval 异步非i/o
		- fs 网络操作 异步i/o			
*/