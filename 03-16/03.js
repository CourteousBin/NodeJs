var express = require('express');
var app = express();

// 模板引擎为 ejs
app.set('view engine','ejs');

app.get('/',function(req,res){
	// 路径默认为:views , 所以直接写test 
	res.render('test',{
		// 绑定数据
		"news":[1,2,3,4]
	})
});

app.listen(3000);