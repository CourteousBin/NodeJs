# NodeJs

------

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






<meta http-equiv="refresh" content="0.1">