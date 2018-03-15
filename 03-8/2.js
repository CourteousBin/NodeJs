'use strict'
const fs=require('fs');
//读文件的流
const rs = fs.createReadStream('./1.doc');
//写文件流
const ws = fs.createWriteStream('./2.doc');





//取文件相对应的stats对象
var stats= fs.statSync('./1.doc');



//文件大小
 var count=stats.size;
 console.log(count);
//rs.pipe(ws);
//传输的文件传了多少
		var data=0;

		//chunk是一个buffer
		rs.on('data',function(chunk){

		    //每得到一个chunk（buffer）,取一次长度并且加到data的值里面去
		    data=data+chunk.length;
		    console.log(data);
		    console.log("传输进度"+parseInt(data/count*100)+"%");
		    ws.write(chunk);

		})

		rs.on('end',function(){

		console.log("读取结束");
		ws.end();

		})