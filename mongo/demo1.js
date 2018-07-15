const mongoose = require('mongoose');

// 链接数据库
mongoose.connect('mongodb://localhost/test');

// 创建一个模型,就是在设计数据库, mongodb 只需要在代码中设计数据库就可以了
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个 cat
const kitty = new Cat({ name: 'Zildjian' });

// 持久化保存 kitty 实例
kitty.save().then(() => console.log('meow'));