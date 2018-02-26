/*
	查看node路径 在命令行 where node 

	nrm 数据源管理工具

	浏览器访问网站的一个流程:
		- 输入域名, 浏览器会先访问你电脑的 hosts 文件 看看有没有这个网页的缓冲
		- 没有的话 域名访问外网
		- 第一个阶段,域名 通过 服务商 提供的 DNS 将域名转换成 IP地址
		- 然后再访问 要被访问的 服务器 , 如果DNS 解析 将一些网址拉黑了,你就访问不了(被墙)
		- 如果你的 hosts 有要被访问网站的IP地址 , 那么可以绕过 DNS解析 直接访问网站服务器
		- 但是 hosts 访问 网站服务器也是要经过 服务商的服务器 , 所以 , 如果服务商服务器将一些网址拉黑了  你也不能访问

	代理(VPN)原理
		- 浏览器访问 黑名单 域名会被墙, 那就访问一个中间服务器
		- 通过中间服务器再去请求 黑名单 域名 , 接受到信息就再返回给浏览器

	镜像npm
		- 要改变Npm数据源,访问国内淘宝镜像cnpm , 那么就要改变数据源
		- 安装nrm , 打开控制台 输入 npm -install -g nrm (注意 , 全局安装就是命令行工具)	
		- nrm -h 查看文档 , nrm ls 查看数据源 nrm use 数据源 切换数据源	

*/

/*
	ES6 语法

	箭头函数
		- var foo=()=>{
			var test = 123;
			return test
		}

		- var foo=function(){
			var test = 123;
			return test
		}
*/

	var result = (v1,v2)=>{
		return v1+v2
	}
	console.log(result(1,2));