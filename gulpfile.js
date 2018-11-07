var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
//var notify = require("gulp-notify");


// Funcion lanzar servidor. Escucha sass. Actualiza navegador. Compila JS
gulp.task('default', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/css/src/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});


// Función sass. Autoprefixer. Carpeta de destino. Actualiza el navegador
gulp.task('sass', function(){
	return gulp.src('assets/css/src/**/*.scss')
		.pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
        }))
		.pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream())
        //.pipe(notify("CSS - Sass compilado"));
});

