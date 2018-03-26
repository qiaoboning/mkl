var gulp=require('gulp');
var cleanCss=require('gulp-clean-css');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var connect=require('gulp-connect');
var sass=require('gulp-ruby-sass');

// 压缩css
// gulp.task('minifyCss',function(){
// 	return gulp.src('./src/css/*.css').pipe(cleanCss()).pipe(concat('all.css')).pipe(gulp.dest('./dist/css/'));
// });

// 操作sass
gulp.task('sass',function(){
	return sass('./src/scss/*.scss').pipe(concat('all.css')).pipe(gulp.dest('./dist/css'));
})

// 压缩js
// gulp.task('minifyJs',function(){
// 	return gulp.src('./src/js/*.js').pipe(uglify()).pipe(gulp.dest('./dist/js'));
// })

gulp.task('reload',['sass'],function(){
	gulp.src('./index.html').pipe(connect.reload());
});
// 新建默认的任务
gulp.task('watch',['sass'],function(){
	connect.server({
		livereload:true
	});

	//监听命令
	gulp.watch(['./src/scss/*.scss'],['reload']);
});