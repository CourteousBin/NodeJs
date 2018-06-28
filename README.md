# NodeJs

## 网络编程

B/S模型:browser server

C/S模型:client server

强调：网络编程重在思想，node只是一个可以帮助我们网络编程的一个工具而已。

使用其他编程语言或者操作系统进行网络编程，思想都是一样的。

**什么是服务器？**

服务器就是一个台电脑，是一台性能比较好的大电脑，它需要支持高扩展性，提供服务的
服务器一旦部署好服务后，一般动的比较少，linux系统比较常用，不需要比较复杂的可视化操作界面，因为复杂的可视化操作系统比较耗资源，如win10，和windows相比linux比较安全
服务器用linux的centos，ubuntu是有桌面版的
服务器多用centos

**什么是应用服务器？**

作为服务器执行共享业务应用程序的底层的系统软件

**什么是web服务器？**

web服务器是一种应用服务器，提供了web服务，对内提供web应用程序的的运行环境

如:Apache、Nginx、IIS、tomcat

**Node 没有 Web 容器**

- 如果我用js写了一个web应用程序，那么node就是web服务器
- .net平台的 ASP或者ASP.net 需要 IIS 作为服务器容器，
- PHP需要搭载 Apache 或者 Nginx 作为服务器容器，
- Java 的 JSP 需要 tomcat 作为服务器容器，
- ruby 的 ruby on rails 需要 搭配 Apache 等作为自己的服务器容器
- Node，不需要服务器容器。

**在地址栏输入网址后页面是如何呈现的？**

- DNS 把域名转化成ip DNS服务器来做这个事情 运营商提供的dns服务器
- CDN 内容分发网络

- 输入 URL：http://www.baidu.com
- DNS 域名解析
  + 计算机无法识别域名，计算机与计算机之间要想进行通信，必须通过ip地址用来定位该计算机所在的位置
  + 在浏览器中，输入的ip地址或者域名，默认给你加了一个80端口号（对方的服务器监听的就是80端口）
  + 158.12.25.652  域名就是为了好记
  + 为了好记，所以我们的 万维网提供了 一个 域名这样的概念
  + 当你输入了 ip 地址后，浏览器会自动去 找DNS域名解析服务器，
- 将用户输入的地址封装成 HTTP Request 请求报文 发送到服务器
  + 浏览器将用户输入的 URL 地址根据HTTP协议 封装成了  http 请求报文（请求头+请求行+请求体）
  + 最终转成了二进制数据再发送到服务器
- 后台服务器接收到用户HTTP Request 请求报文
  + 后台服务器接收到 客户端发送给自己的数据（二进制数据）
    * 首先把二进制数据按照编码解析成字符，（人类可以识别的）
    * 解析成字符之后，再按照 HTTP 协议规范中定义的格式解析出来
- 后台服务器处理用户请求信息
  + 当得到用户请求报文之后，根据请求报文中的 get、port或者 URL、或者URL中的查询字符串或者 请求体中的数据
  + 根据用户的特定的请求数据做特定的处理
- 后台服务器将相应结果封装到 HTTP Response 响应报文中 发送给客户端
  + 当我们解析和处理完用户请求报文消息之后
  + 服务器开始将具体的 要发送给客户端的数据 根据 HTTP 协议规范 封装成 HTTP协议响应报文
  + 响应头、响应字段、响应体
  + 该数据说白了也是具有特定格式的字符串而已，最终这个字符串也要转换成二进制数据发送到客户端
  + 发送到客户端也是通过 Socket（ip地址、端口号） 发送到了该客户单
- 用户浏览器接收到响应后开始渲染html、css，解析和执行 JavaScript 代码
  + 当客户端解析到 服务器发送过来的 二进制数据
  + 客户端浏览器也会将 二进制数据 根据编码类型解析成 字符串
  + 然后根据 HTTP 协议，解析服务器发送过来的 响应报文
  + 然后根据响应报文中的报文内容（报文头、报文体）做具体的解析
- 当浏览器在解析的过程中遇到 一些静态资源时，会再次重复上面的步骤

### 参考资料

- 上野宣. 图解 HTTP[M]. 人民邮电出版社, 2014.
- [CyC2018 HTTP](https://github.com/CyC2018/Interview-Notebook/blob/master/notes/HTTP.md)

## NodeJs概述

- [NodeJs官网](https://nodejs.org/en/)
- node是门技术不是语言
- node是js运行环境基于v8引擎,特点用事件驱动、无阻塞的io模型,优势轻量、高效
- Node.js 的npm包生态系统，是世界上 最大的 开源库 生态系统
- Node.js 的作者 : 瑞恩.达尔

## 安装与配置

**nvm npm nrm**
>  - node.js version manager 是一个node的版本管理工具,为了解决node版本切换问题
>  
>  - NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
>      + 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
>      + 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
>      + 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。
> 
>  - nrm(npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，那么我们可以用这个来切换镜像源。
> 

**nvm常用指令**

- nvm项目地址：[nvm-github地址](https://github.com/coreybutler/nvm-windows)
- 查看所有已安装的本地的node版本
`nvm list`
- 切换node版本
` nvm use 版本号`
- 安装指定版本的node
` nvm install 版本号 位数`
- 卸载已安装的指定版本的node
` nvm uninstall 版本号`

**nrm常用指令**

- nrm ls 查看npm的数据源
- nrm use 切换npm下载包的地址
- nrm test  测试下哪个数据源快

**PATH环境变量**

目的是为了在控制台中的任何目录都可以快速打开或者使用该可执行文件

**cmd**

- cd（change directory）切换目录
- md（make directory）新建目录
- rd（remove directory）删除非空目录
- dir（directory）查看目录中的条目
 ` ls linux`
- ren（rename）重命名文件
- del（delete）删除文件
- cls（clear screen）清屏
  `clear linux`

## 模块化

- 现实中的模块化
  + 生产效率高
  + 维护方便，成本低
- 程序中的模块化
  + 开发效率高 一次编写多次使用
  + 方便维护了（维护的成本更低）模块之间有高耦合低内聚的特点
- 为什么要在 程序 中使用 模块化的开发方式
  + 命名冲突
  + 文件依赖

### 浏览器端模块化规范

- AMD
    + RequireJS
- CMD
    + SeaJS
- commonjs
    + node.js

### `SeaJS` 的使用

- 定义模块 `define`作用域就在define的函数体里，三个参数require、exports、module
- 加载模块 `require`
  + 在一个模块系统中，`require` 加载过的模块会被缓存
  + 默认 `require` 是同步加载模块的
- 暴露接口 `exports` 和 `module.exports` exports是module.exports的别名，exports能做什么，module.exports就能做什么
- 启动模块系统 `seajs.use(callback)`
  + seajs.use 和 Document 的 ready 没有任何关系
  + 要想保证 文档结构加载完毕再执行你的 js 代码，一定要在 seajs.use  内部通过 window.onload 或者 $(function(){})


### node.js模块化

- 一个 js 文件在 `node` 里面我们就理解为一个模块
- `require` 用来加载模块
- `module.exports` 用来曝露属性和方法，只能导出单个成员(字符串、方法)
- `exports` 是 `module.exports` 的别名，`exports` 暴露的是对象，可以暴露多个成员

module 是一个全局对象，它的作用是存储模块信息的,每一个js是一个模块，每一个模块里面都有一个module，module里面还存储了父子结构

`module.exports` 只能导出单个成员(字符串、方法)

```javascript
module.exports = 'hello'
```

`module.exports` 如果导出两个成员，后者会覆盖前者
```javascript
module.exports = 'one'

module.exports = 'two'

console.log(module.exports); // two
```

`module.exports` 正确导出多个成员

```javascript
module.exports = {
  add:function(){
    return x+y
  },
  str:'hello'
}
```

**为什么推荐使用 module.exports**

1.在 `Node` 中，最后一行代码默认是：


```javascript
  return module.exports
```
2. 防止引用类型错乱

```javascript
module.exports = 'hello'

export.foo = 'world'

// 最终被 require 的结果是？   --> 'hello'

// 程序开始执行的时候 module.exports 与 exports 都指向同一个对象

// 如果对 module.exports 或者 exports 其中一个赋值(直接 = ，而不是添加对象)
// export = 'world'

// 那么就会自动指向一个新对象，导致 module.exports 与 exports 不再指向同一个对象，发生混乱

// 但是最后，系统会自动执行 return module.exports

// 练习1：

  // 这里导致 exports !== module.exports
  module.exports = {
    foo:'bar'
  }

  // 这里又重新建立两者引用关系
  exports = module.exports

  exports.foo = 'hello'

  // require 的结果是: {foo:'hello'}

// 练习2
  // {foo: bar}
  exports.foo = 'bar'


  // {foo: bar, a: 123}
  module.exports.a = 123

  // exports !== module.exports
  // 最终 return 的是 module.exports
  // 所以无论你 exports 中的成员是什么都没用
  exports = {
    a: 456
  }

  // {foo: 'haha', a: 123}
  module.exports.foo = 'haha'

  // 没关系，混淆你的
  exports.c = 456

  // 重新建立了和 module.exports 之间的引用关系了
  exports = module.exports

  // 由于在上面建立了引用关系，所以这里是生效的
  // {foo: 'haha', a: 789}
  exports.a = 789

  // 在这里都全部推翻了，重新赋值
  // 最终得到的是 Function
  module.exports = function () {
    console.log('hello')
  }
```

注意，对 `module.exports` 的赋值必须立即完成。 不能在任何回调中完成。 以下是无效的：

```javascript
setTimeout(() => {
  module.exports = { a: 'hello' };
}, 0);
```


# 模块系统

##模块的种类

在Node.js中，模块分为两类：

第一类，核心模块（原生模块），node为javascript提供了很多服务器级别的API，用名称直接可以加载。

- 核心模块
  + fs file system
  + http
  + os
  + path
  + querystring
  + url
  + ...

第二类，文件模块，用路径加载，有一种特殊的文件模块----->包，可以用名字。

## 优先从缓存加载

`common.js`规范 -> 加载后，再次加载时，去缓存中取`module.exports`

## require参数解析

加载核心模块的时候不需要传入路径，因为Node.js已经将核心模块的文件代码编译到了二进制的可执行文件中

在加载的过程中，原生的`核心模块`的优先级是是最高

**__dirname & __filename**

- __dirnamee 用来找到当前文件夹的路径
- __filename 用来去到当前文件的路径

在加载一个自己编写的模块的时候，最好使用 __dirname 和 你要加载的模块的文件名拼接 

**标识符中可以不包含扩展名**

Node会按照`.js、.node、.json`的次序补足扩展名，依次尝试

不包含扩展名的时候，Node.js会按照

- `路径.js`     以后自己在加载js文件模块的时候，就省略掉.js后缀就可以了

- `路径.node`   后缀为node的文件是c/c++写的一些扩展模块

- `路径.json`   如果是加载json文件模块，最好加上后缀.json，能稍微的提高一点加载的速度

- .json文件最终Node.js也是通过fs读文件的形式读取出来的，然后通过JSON.parse()转换成一个对象
- Node.js会通过同步阻塞的方式看这个路径是否存在 , 依次尝试，直到找到为止，如果找不到，报错

**查找顺序**

require 加载包的时候 , 直接写包名，先在包内的`node_modules`,

去父级目录下的`node_modules`目录下查找，

依次向上查找，直到根目录。

[参考文献](http://www.infoq.com/cn/articles/nodejs-module-mechanism/)

# 包

## 包的组成

- 包结构
- 包描述文件package.json
  + 描述你的当前的包的一些相关的信息
  +dependencies 
   -  包名：“版本号” 
   -  > +版本号   下载大于某个版本号，npm会下最新版
   -  < +版本号   下载小于某个版本号，npm会下小于这个版本号最新版
   -  <= 小于等于 一定会下你写的这个版本，除非没有你写的这个版本
   -  >= 大于等于  下载最新版
   -   *、" "、X  任意 npm会给你下最新版
   -   ~ +版本号  会去下约等于这个版本的最新版，在大版本不变的情况下下一个比较新的版本
   -   ^ +版本号  不跃迁版本下载，^2.1.0 npm会下载大版本不变，去下载2.x.x版本里的最近版
   
  
  [参考文献 package.json全字段解析](http://blog.csdn.net/woxueliuyun/article/details/39294375)

  **package.json**

  - npm init    初始化package.json

  包的描述文件:

>   package.json文件内部就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置，
> 比如name就是项目名称，version就是项目的版本号
> 
>   在模块的加载机制中，有一个main属性是非常重要的，它很大意义上决定了包要导出的模块位置

## npm
- 基于Node.js开发的包的托管网站
- Node.js包管理工具

**npm :基于包的规范实现的一个包管理工具** 

- npm install 包名
> **执行过程**:
  > 
  > 当执行npm install的时候，它会自动跑到npm的网站，然后找到该包的github地址，
  > 找到之后，下载这个压缩包，然后在执行npm install的当前目录下找一个叫做node_modules目录
  > 如果找到，直接解压这个压缩包，到node_modules目录下
  > 如果找不到，则新建一个node_modules目录，解压到该目录
- npm install -g 包名
>表示全局安装   
   npm在安装的时候，在全局设置了一个安装目录，只要是全局安装就会把包安装到这个目录里面去
   npm install -g 包名 只要是全局安装就是安装命令行工具

- npm install 缩写 npm i
>当执行npm install的时候，会自动在当前目录中查找package.json文件
如果找到，找里面的 dependencies 字段，安装该字段中所有依赖的项
- npm docs 包名 
>通过这个命令打开 包相对应的文档
- npm install --save 生产环境
>npm i -S jquery@3.*

- npm install -save-dev 开发环境
>npm i -D jquery@3.*

- npm config set prefix  
>修改全局安装目录

- npm list
>当前目录有什么包，检测node_modules里面有什么

[参考文献 npm的命令](https://docs.npmjs.com/)

### npm 最终的目的就是：让你的开发模式工程化，都依靠工具来管理

---

## i/o

i/o在服务器上可以理解为读写操作。

**什么是并发？**

一个时间段中有几个程序都处于已启动运行到运行完毕之间。

**异步i/o与事件驱动**

**什么是进程?**

- 进程是为运行当中的应用程序提供运行环境
- 一个运行当中的应用程序就会有一个进程与之相对应

**什么是线程？**

- 线程是用来运行应用程序中代码
- 一个线程在一个时间只能做一件事件
- node是单线程执行，用异步替代了多线程

**同步、异步有什么不同？**

异步不会阻塞后面的代码，同步会阻塞后面的代码,一条线程先执行同步的代码后执行异步的代码。

**异步非i/o操作和异步i/o操作**

- 异步非io setTimeout setInterval
- 异步IO操作 操作文件 网络操作 fs

**事件驱动模型**

主线程：

1. 执行node的代码，把代码放入队列

2. 事件循环程序（主线程）把队列里面的同步代码都先执行了，

3. 同步代码执行完成，执行异步代码

4. 异步代码非2种状况
>   * 异步非io setTimeout() setInterval()判断是否可执行，如果可以执行就执行，不可以跳过。
>   * 异步io 文件操作 会从线程池当中去取一条线程，帮助主线程去执行。

5. 主线程会一直轮训，队列中没有代码了，主线程就会退出。

6. 子线程：被放在线程池里面的线程，用来执行异步io操作

    * 在线程池里休息
    * 异步io的操作来了，执行异步io操作。
    * 子线程会把异步io操作的callback函数，扔回给队列
    * 子线程会回到线程池了去休息。
    * callback
    * 在异步io代码执行完成的时候被扔回主线程。

---
## 系统模块

### HTTP

#### request.setHeader(name, value)

为 headers 对象设置一个单一的 header 值。如果该 header 
已经存在了，则将会被替换。这里使用一个字符串数组来设置有相同名称的多个 headers。

**text/plain;charset=utf-8**

在服务端默认发送的数据 是 utf8 编码 , 如果不设置`Content-Type`浏览器无法识别编码格式

浏览器不知道服务器相应内容编码的情况下会默认使用当前操作系统的 默认编码

中文操作系统默认编码 gbk

```javascript
var http = require('http')
var server = http.createServer()

server.on('request',function(req,res){
  // 中文操作系统默认编码 gbk
  // 解决办法 正确的告诉浏览器 服务器发送的数据是什么编码格式
  res.setHeader('Content-Type','text/plain;charset=utf-8')
  res.end('你好')
})

server.listen(3000,function(){
  console.log('running...')
})
```

在网页头部设置`<meta charset="UTF-8">`也可以解决编码问题

```javascript
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

**text/html;charset=utf-8**

让浏览器解析`标签`,如`div`,`p`等网页标签;

---

#### response.statusCode

当使用隐式的响应头时（没有显式地调用 response.writeHead()），该属性控制响应头刷新时将被发送到客户端的状态码。

例子:
  
  ```javascript
    response.statusCode = 404;
  ```

如何让客户端重定向

- 状态码设置302
- 在响应头通过 location 重定向
- 如果客户端收到服务器响应 302 就会自动去 location 找重定向

```javascript
res.statusCode = 302;
// 第二个选项就是 重定向网页
res.setHeader('Location','/')
```
**状态码 302 与 301 区别**

- 302 临时重定向 浏览器不记忆
- 301 永久重定向 浏览器会记住

---

### FS

`fs` 模块提供了一些 API，用于以一种类似标准 POSIX 函数的方式与文件系统进行交互。

#### fs.readFile(path[, options], callback)

异步地读取一个文件的全部内容。 例子：

```javascript
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

回调有两个参数 (err, data)，其中 data 是文件的内容。

如果未指定字符编码，则返回原始的 buffer。

如果 options 是一个字符串，则它指定了字符编码。 例子：

```javascript
fs.readFile('/etc/passwd', 'utf8', callback);
```

---

### url

`url` 模块提供了一些实用函数，用于 URL 处理与解析。 可以通过以下方式使用：

```javascript
var url = require('url');
```
**路由**

`Node` 比较偏底层，很多东西都需要亲自写代码来实现。

`Node` 开启 `web` 服务就像一个黑盒子，它不像 `PHP` 默认封装好底层细节操作。

如路由，在 `Node` 中，如果你自己不定义可以访问路径，那么所有资源都不允许客户端访问。

用户可以访问的资源都是开发人员设计而定。

但是，正因为偏底层，`Node` 可以吧路由设计的非常精简而简美，优雅而艺术。

#### url.parse(urlString[, parseQueryString[, slashesDenoteHost]])

- `urlString` <string> 要解析的 URL 字符串。

- `parseQueryString` <boolean> 如果为 `true`，则 `query` 属性总会通过 `querystring` 模块的 `parse()` 方法生成一个对象。 如果为 `false`，则返回的 URL 对象上的 `query` 属性会是一个未解析、未解码的字符串。 默认为 `false`。

- `slashesDenoteHost` <boolean> 如果为 `true，则` // 之后至下一个 / 之前的字符串会被解析作为 `host`。 例如，//foo/bar 会被解析为 `{host: 'foo', pathname: '/bar'}` 而不是 `{pathname: '//foo/bar'}`。 默认为 `false`。

```javascript
var url = require('url')

// 获得form表单提交的的内容 , 如果 parseQueryString 为 true , query 会变成一个对象
var obj = url.parse('/getMethod?name=Bin,&message=nodeAPI学习',true);
console.log(obj);

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=Bin,&message=nodeAPI学习',
  query: { name: 'Bin,', message: 'nodeAPI学习' },
  pathname: '/getMethod',
  path: '/getMethod?name=Bin,&message=nodeAPI学习',
  href: '/getMethod?name=Bin,&message=nodeAPI学习' 
}
```

---

## 模板

### art-template

**简介**

`art-template` 是一个简约、超快的模板引擎。

它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 `JavaScript` 
极限的运行性能，并且同时支持 `NodeJS` 和浏览器。

**特性**

- 拥有接近 JavaScript 渲染极限的的性能

- 调试友好：语法、运行时错误日志精确到模板所在行；支持在模板文件上打断点（Webpack Loader）

- 支持 Express、Koa、Webpack

- 支持模板继承与子模板

- 浏览器版本仅 6KB 大小

> [ART-TEMPLATE 高性能 JavaScript 模板引擎](http://aui.github.io/art-template/zh-cn/docs/index.html)


**服务器端渲染与客户端渲染区别**

- 客户端( AJAX )渲染不利于 SEO 搜索引擎优化
- 服务端渲染是可以被爬虫抓取到，客户端比较难以实现爬虫抓取
- 网站既不是纯服务端渲染，也不是纯客户端渲染，而是两者结合实现
  + 京东商品列表是服务端渲染，目的是为了 SEO 优化
  + 商品评论是客户端渲染，提高用户体验

---

## Express

>Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。

>作者:[TJ Holowaychuk](https://github.com/tj)

**快速上手**

```javascript
var express = require('express')
// 创建服务 http.createServer
var app = express()

app.get('/',function(req,res){
  res.send('hello express')
})

app.get('/about',function(req,res){
  res.send('hello about')
})

// 公开目录,让用户可以访问到里面的资源
app.use('/public/',express.static('./public/'))

app.listen(3000,function(){
  console.log('app is runing at port 3000');
})
```

**基本路由**

- 请求方法
- 请求路径
- 处理函数

```javascript
app.get('/',function(req,res){
  res.send('hello express')
})

app.post('/about',function(req,res){
  res.send('hello about')
})
```

**静态服务**

公开目录，让用户可以访问到里面的资源。

```javascript
// 当以 public 开头的时候 , 去 ./public/ 目录中找相对应的资源
  // 127.0.0.1:3000/public/img/images.jpg
app.use('/public/',express.static('./public/'))

// 省略 路由中 public 直接访问资源
  // 127.0.0.1:3000/img/images.jpg
app.use(express.static('./public/'))
```

[阅读更多](http://www.expressjs.com.cn/starter/static-files.html)

---

### 在 `Express` 中配置 `art-template` 模板引擎

**install**

```
npm install --save art-template
npm install --save express-art-template
```

**example**

```javascript
var express = require('express');

var app = express();

// 配置 art-tempalte 模板引擎
// 第一个参数表示,当渲染以 .art 结尾的文件时候,使用 art-tempate 模板引擎
// app.engine('art', require('express-art-template'));

// 也可以配置成 Html , 这样也可以在html赋值
app.engine('html', require('express-art-template'));

// Express 为 Respnse 响应对象提供了一个方法: render
// render 方法默认是不可以使用,但是如果配置了模板引擎就可以使用
// res.render('模板名',{模板数据})
// 模板名 不能写路径 , 默认会去项目中 views 目录查找模板文件
app.get('/', function (req, res) {
    res.render('404.art', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    });
});

// 配置成 html, 直接赋值在html
app.get('/admin', function (req, res) {
    res.render('admin/admin.html', {
        title: '管理系统'
    });
});

app.listen(3000,function(){
  console.log('app is runing at port 3000');
})
```

### 在 `Express` 使用 `POST` 接收数据

在 `Express` 框架中，并没有内置获取表单 POST 请求的 API ，我们需要使用第三方 **中间件**。

#### body-parser

**Installation**

```
$ npm install --save body-parser
```

**Examples**

```javascript
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parser
// 只要加入这个配置,则在 req 请求对象上会多一个属性:body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  // 可以通过 req.body 来获取表单 POST 请求体数据
  res.end(JSON.stringify(req.body, null, 2))
})
```


## nodemon 

>Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. 

>[nodemon reload, automatically](http://nodemon.io/)

**Installation**

```
npm install -g nodemon
```

**Usage**

```
nodemon [your node app]
```

---

## 代码规范

[JavaScript Standard Style 代码风格(推荐)](https://standardjs.com/readme-zhcn.html)

[Airbnb JavaScript Style](https://github.com/airbnb/javascript)
