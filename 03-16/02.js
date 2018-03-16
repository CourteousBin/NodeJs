var express = require('express');
var app = express();

// 提供静态文件伺服能力
app.use(express.static('./public'));

app.listen(3000);