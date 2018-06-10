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

- 一个js文件在node里面我们就理解为一个模块
- require用来加载模块
- module.exports用来曝露属性和方法的，因为模块有封装性，需要打破封装性曝露方法和属性来
- exports是module.exports的别名，exports可以做的事情，module.exports都可以做，exports只能用.的形式曝露属性和方法

module 是一个全局对象，它的作用是存储模块信息的,每一个js是一个模块，每一个模块里面都有一个module，module里面还存储了父子结构

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