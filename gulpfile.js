var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var less = require('gulp-less');

gulp.task('imagemin', function () {
    return gulp.src('./themes/goodtimes/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./themes/goodtimes/images'));
});


gulp.task('uglify', function() {
  gulp.src('./themes/goodtimes/lib/*.js')
    .pipe(uglify('home.js'))
    .pipe(gulp.dest('./themes/goodtimes/js'))
});

gulp.task('less', function () {
  return gulp.src('./themes/goodtimes/css/*.less')
    .pipe(less())
    .pipe(gulp.dest('./themes/goodtimes/css'));
});

gulp.task('watch', function(){
        livereload.listen();
        gulp.watch('./themes/goodtimes/css/*.less', ['less']);
        gulp.watch('./themes/goodtimes/lib/*.js', ['uglify']);
        gulp.watch(['./themes/goodtimes/css/style.css', './themes/goodtimes/**/*.twig', './themes/goodtimes/js/*.js'], function (files){
        livereload.changed(files)
    });
});