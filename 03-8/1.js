const fs = require('fs');
const rs = fs.createReadStream('./1.doc');
const ws = fs.createWriteStream('./2.doc');
rs.on('data',(chunk)=>{
	console.log(chunk.length);
	ws.write(chunk);
})
rs.on('end',(chunk)=>{
	console.log('结束了');

	ws.end();
})