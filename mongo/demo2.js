var mongoose = require('mongoose')

// 设计表结构
var Schema = mongoose.Schema

// 链接数据库
mongoose.connect('mongodb://localhost/test')

// 设计表结构
// 字段名称就是表结构中属性名称
// 约束的目的是为了保证数据的完整性 不能有脏数据
var blogSchema = new Schema({
    title: {
        type: String,
        required: true // 约束 , 必填项
    },
    author: String,
    body: String
})

// 将文档结构发布为 模型
// 第一个参数 用来表示数据库名称 , mongoose 会将大写名词 转换成 小写复数 
// BLog -> blogs
// 第二个参数就是架构
// 返回值是模型构造函数
var Blog = mongoose.model('Blog', blogSchema);


// 新增数据
var article = new Blog({
	title:'学习node',
	author:'test',
	body:'node'
})

article.save(function(err,ret){
	if(err){
		console.log('失败');
	}else{
		console.log(ret);
		console.log('成功');
	}
})

// 查询数据 
	// 查询所有
	Blog.find(function(err, ret) {
	    if (err) {
	        console.log('失败');
	    } else {
	        console.log(ret);
	    }
	})

	// 按条件查询
		// find 返回是一个数组
		// findOne 返回的是一个对象
	Blog.findOne({author:'Bin,'},function(err,ret){
		console.log(ret);
	})	


// 删除数据 
	Blog.remove({
		author:'test'
	},function(err,ret){
		if(err){
			console.log('删除失败');
		}else{
			console.log(ret);
		}
	})

// 更新数据库
	Blog.findByIdAndUpdate('5b4b1f7c3d822f32606de4f2',{
		title:'更新数据库'
	},function(err,ret){
		console.log(ret);
	})
