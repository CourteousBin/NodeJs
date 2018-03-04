/*
	练习
		- 创建一个文件夹然后写文件,最后读取文件
*/
	var fs = require('fs');

	fs.mkdir('fs_Test', (err)=>{
		fs.writeFile('./fs_Test/fs_write.txt', '练习:创建一个文件夹然后写文件,最后读取文件', 'utf8', (err)=>{
			fs.readFile('./fs_Test/fs_write.txt', 'utf8', (err,data)=>{
				console.log(data);
			});
		});
	});