/*
	引用自己写的包

	callback , 直接写回调函数
*/
	var rf = require('readf');

	rf('./packagee.json',function(err,data){
		if(err){
			console.log(err);
		}else {
			console.log(data);
		}
	})