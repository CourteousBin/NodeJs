var fs = require('fs');

var rf = function(callback){
	console.log(__dirname+'/3.text');
	

	// 如果程序这样编写 , 那么 路径会出错
	// 在调用的时候 , 这个路径不是调用者的路径
	// fs.readFile('./3.text', 'utf8', (err,data)=>{

	// 用全路径 , 无乱在哪里调用都行 
	fs.readFile(__dirname+'/3.text', 'utf8', (err,data)=>{	
		callback(data);
	});
}
module.exports = rf;