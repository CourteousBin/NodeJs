/*
	const (常量)
		- 块级作用域 与 Let 一致
*/

/*
	promise 异步流程控制的解决方案
		- then 是 Promise 异步流程控制的一种

	例子: 
		fs.readFile('./0.js','utf8',(err,data)=>{

			fs.readFile('./0.js','utf8',(err,data)=>{

				fs.readFile('./0.js','utf8',(err,data)=>{

					...如果一直嵌套下去 , 会非常的杂乱
	
				})	
	
			})	
	
		})	


		fs.readFile('./0.js','utf8',(err,data)=>{

	
		}).then(

			fs.readFile('./0.js','utf8',(err,data)=>{

			
			})	

		).then(

			fs.readFile('./0.js','utf8',(err,data)=>{

	
			})	
		
		)

		一直 then 下去 , 虽然乱 但是比 嵌套更加直观 , 当然 then 完整不是这样写 , 这只是说明问题


*/