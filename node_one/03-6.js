/*
	Poromise 正规写法

	实例:
		'use strict'

		 const fs=require('fs');

		 var rf=function(){
		 // 第一个参数回调 成功 , 第二个参数是失败
		 return new Promise(function(resolve, reject){
		        fs.readFile('./02-22.js','utf8',(err,data)=>{
		            if(err){
		                //失败
		               reject(err);

		            }
		            else{
		                //成功
		               resolve(data);

		            }
		        })
		    })
		}
		//then里面的第一个方法是成功，第二个方法都是失败
		rf().then(function(data){
		    console.log("执行成功");
		},function(err){
			console.log("执行失败");
		})
*/


/*
	在angularJs 可以使用 promise 对象

	事例:
		$http({
			method:'post',
			url:'xxx'.
			data:'xx'
		}).then(function(success){},function(err){})
*/

/*
	总结:
		- 异步流程就是嵌套
		- Promise 就是用同步的方式写异步 
*/

/*
	Buffer
		- 每一个值都是16进制的值
		- 是一个array对象
	
	实例:
		const fs = require('fs');

		fs.readFile('./02-22.js', function(err,data){
			console.log(data);
		});	
*/
const fs = require('fs');

var buf = new Buffer(5);
buf[0] = 13;
buf[1] = 12;
console.log(buf);