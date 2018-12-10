const gulp = require("gulp");

/*拷贝html文件*/
gulp.task("copy-html",function(){
	return gulp.src("html/*.html")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
})

//拷贝图片
gulp.task("images",function(){
	return gulp.src("images/**/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

/*
	编译scss文件
	gulp-minify-css
	gulp-rename
 */
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("homepage_scss",function(){
	return gulp.src("stylesheet/homepage.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("homepage.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("login_scss",function(){
	return gulp.src("stylesheet/login.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("register_scss",function(){
	return gulp.src("stylesheet/register.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("register.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("shoppingCar_scss",function(){
	return gulp.src("stylesheet/shoppingCar.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("shoppingCar.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("order_scss",function(){
	return gulp.src("stylesheet/order.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("order.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("_base.css",function(){
	return gulp.src("stylesheet/_base.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

//拷贝js文件
gulp.task("scripts",function(){
	return gulp.src(["js/*.js","!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//拷贝数据
gulp.task("data",function(){
	return gulp.src(["json/*.json","!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//拷贝php
gulp.task("php",function(){
	return gulp.src("php/*.php")
	.pipe(gulp.dest("dist/php"))
	.pipe(connect.reload());
})


//建立工程任务
gulp.task("build",["copy-html","images","homepage_scss","login_scss","register_scss","shoppingCar_scss","order_scss","scripts","data","php"],function(){
	console.log("编译成功");
})

//编写监听
gulp.task("watch",function(){
	gulp.watch(["html/*.html"],["copy-html"]);
	gulp.watch(["php/*.php"],["php"]);
	gulp.watch(["*.{jpg,png}"],["images"]);
	gulp.watch(["stylesheet/homepage.scss"],["homepage_scss"]);
	gulp.watch(["stylesheet/login.scss"],["login_scss"]);
	gulp.watch(["stylesheet/register.scss"],["register_scss"]);
	gulp.watch(["stylesheet/shoppingCar.scss"],["shoppingCar_scss"]);
	gulp.watch(["stylesheet/order.scss"],["order_scss"]);
	gulp.watch(["js/*.js","!gulpfile.js"],["scripts"]);
	gulp.watch(["json/*.json","!package.json"],["data"]);

})

//启动服务
const connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:8888,//不能冲突
		livereload:true//实时刷新
	})
})


//启动默认服务
gulp.task("default",["watch","build","server"]);