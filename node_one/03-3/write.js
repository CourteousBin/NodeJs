	var fs = require('fs');
	// 第一个参数是路径 , 第二个参数是内容 , 第三个编码格式 , 第四个回调函数
	// 如果原本有内容 , 那么会把内容覆盖
	// 文件不存在的时候会创建文件 , 但是不会创建文件夹
	fs.writeFile('./write.txt', 'hello world', 'utf8', (err)=>{

	});