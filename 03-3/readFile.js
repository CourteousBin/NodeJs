/*
	练习
		- 读取文件夹,判断文件夹的内容是文件还是文件夹
*/
	var fs = require('fs');
	fs.readdir('./fs_Test',(err,files)=>{
		for(var i = 0;i<files.length;i++){
			
			var resutl = fs.statSync('./fs_Test/'+files[i]);
			if(resutl.isFile()){
				console.log(files[i] + '是文件');
			}else {
				console.log(files[i] + '是文件夹');
			}
		}

		
	});