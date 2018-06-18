var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

var comments = [
{
  name:'a',
  message:'test',
  dateTime:'2018-6-18'
},
{
  name:'a',
  message:'test',
  dateTime:'2018-6-18'
},
{
  name:'a',
  message:'test',
  dateTime:'2018-6-18'
},
{
  name:'a',
  message:'test',
  dateTime:'2018-6-18'
},
]

http.createServer(function(req,res){
  // 将路径解析为对象,第二个参数为true,字符串转换为对象
  var parseObj = url.parse(req.url,true)
  // 获取单独不包含查询字符串的路劲部分
  var pathname = parseObj.pathname
  if (pathname === '/'){
    fs.readFile('views/index.html', function(err,data){
      if (err){
        return res.end('404')        
      }
      var html = template.render(data.toString(),{
        comments:comments
      })
      res.end(html)
    });
  }else if(pathname === '/pinglun'){
    // res.end(JSON.stringify(parseObj.query))

    var comment = parseObj.query

    comment.dateTime = '2018年6月18日17:23:33'

    comments.push(comment)

    // 如何让客户端重定向?
      // 1.状态码设置302
      // 2.在响应头通过 location 重定向
      // 如果客户端收到服务器响应 302 就会自动去 location 找重定向
    res.statusCode = 302;
    res.setHeader('Location','/')
    res.end() 

  }else if(pathname === '/post'){
    fs.readFile('./views/post.html',function(err,data){
      if(err){
        return res.end('404')
      }
      res.end(data)
    })
  }else {
    fs.readFile('./views/404.html',function(err,data){
      res.end(data)
    });
  }
}).listen(3000,function(){
  console.log('running');
})