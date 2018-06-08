/*

	Gulp
		- npm install --global gulp 进行全局安装
		- npm install --save-dev gulp 项目依赖安装
		- 在项目根目录下创建一个名为 gulpfile.js 的文件
		- 执行 gulp 只要在命令行输入 gulp [任务名称] (因为全局安装了,所以可以识别)
		- gulp是自动化运行器,gulp-less 这些就是 gulp的插件 , 也可以说学习gulp就是学习gulp的插件
		- npm install gulp-cssmin (安装css压缩插件)

	例子:
		// 引入本地安装的gulp
		// 返回gulp是一个对象 , 这个对象可以实现任务清单定制
		var gulp = require('gulp');

		// 返回的是方法
		var less = require('gulp-less');

		// 定义任务 , 这个任务名为 less
		gulp.task('less',function(){
			// 回调写具体逻辑
			// 借助gulp.src 来指定less的文件位置 , * 指的是全部Less文件
			gulp.src('./public/less/*.less')

			// 借助于gulp插件实现less 转 css 操作
			// 安装less插件 npm install gulp-less  (本地安装默认在node_modules)

				// 把less 转换
				.pipe(less())
				// 通过gulp.dest进行存储
				.pipe(gulp.dest('./resutl/public'));
		});



*/

	// 引入本地安装的gulp
	// 返回gulp是一个对象 , 这个对象可以实现任务清单定制
	var gulp = require('gulp');

	// 返回的是方法
	var less = require('gulp-less');

	// 压缩css方法
	var cssmin = require('gulp-cssmin');

	// 压缩图片方法
	var imagemin = require('gulp-imagemin');

	// 压缩js方法
	var uglify = require('gulp-uglify');

	// 合并图片方法
	var concat = require('gulp-concat');

	// 压缩html方法
	var htmlmin = require('gulp-htmlmin');

	// 添加CSS私有前缀
	var autoprefixer = require('gulp-autoprefixer');

	// 添加版本号
	var rev = require('gulp-rev');

	// 替换
	var revCollector = require('gulp-rev-collector');

	var useref = require('gulp-useref');

	// 定义任务 , 这个任务名为 less
	gulp.task('less',function(){
		// 回调写具体逻辑
		// 借助gulp.src 来指定less的文件位置 , * 指的是全部Less文件
		gulp.src('./public/less/*.less')

		// 借助于gulp插件实现less 转 css 操作
		// 安装less插件 npm install gulp-less  (本地安装默认在node_modules)

			// 把less 转换
			.pipe(less())
			// 转换完成的css 再 经过压缩
			.pipe(cssmin())
			// 通过gulp.dest进行存储
			.pipe(gulp.dest('./resutl/cssmin'));
	});

	// 定义任务 处理图片 (压缩图片的)
	gulp.task('image',function(){
		// *.png 代表所有Png格式图片
		// gulp.src('./public/images/*.png')

		// 代表images下所有文件(包括文件夹都可以)
		// gulp.src('./public/images/**/*')

		// 代表所有iamges下所有 , 但是里面还有文件夹的话还是不行
		gulp.src('./public/images/*')
		
			.pipe(imagemin())
			.pipe(gulp.dest('./resutl/imagemin'));
	})

	// 定义任务 压缩JS
	gulp.task('js',function(){
		gulp.src('./scripts/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('./resutl/jsmin'));
	})

	gulp.task('concat',function(){
		gulp.src('./scripts/*.js')
			// 先合并 , 合并出 一个文件
			.pipe(concat('all.js'))
			// 再压缩
			.pipe(uglify())
			// 最后输出
			.pipe(gulp.dest('./resutl/jsConcat'));
	})

	// 压缩Html
	gulp.task('html',()=>{
		// 数组,同时操作多个文件

		/*
			base:./ 是表示会按照你要求放路径
			文件路径格式:
				index.js
				views
					- xxx.html
					- xxx.html

			gulp.dest输出的时候也会根据这个路径输出	
		*/
		gulp.src(['./index.html','./views/*.html'],{base:'./'})
			// 去除空格
			.pipe(htmlmin({collapseWhitespace:true}))
			.pipe(gulp.dest('./resutl/htmlmin'))
	})

	// css添加私有前缀 --webkit-- 这些
	gulp.task('autoprefixer',()=>{
		gulp.src('./public/less/*.less')
			.pipe(less())
			.pipe(autoprefixer())
			.pipe(gulp.dest('./resutl/autoPrefixer'))
	})

	gulp.task('rev',()=>{
		gulp.src('./public/less/*.less')
			.pipe(less())
			// 添加版本号 .. 
			.pipe(rev())
			.pipe(gulp.dest('./resutl/rev'))
			// 记录改好的名字的css做成一个json文件 
			.pipe(rev.manifest())
			.pipe(gulp.dest('./resutl/rev/mainfest'))	
	})

	// 替换操作
	gulp.task('revCollector',function(){
		gulp.src(['./resutl/rev/mainfest/*.json','./views/*.html'],{base:'./'})
			.pipe(revCollector())
			.pipe(gulp.dest('./resutl/revCollector'))
	})

	gulp.task('useref',()=>{
		gulp.src('./index.html')
			.pipe(useref())
			.pipe(gulp.dest('./resutl/useref'))
	})
	
	gulp.task('demo',['less','image'],function(){
		// 依赖 , 就是先回执行less , image 再执行回调函数
		console.log('demo');
	})