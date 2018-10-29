var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");


// Funcion lanzar servidor. Escucha sass. Actualiza navegador. Compila JS
gulp.task('default', ['sass', 'jscompress'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/css/src/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("assets/js/src/ready.js", ['jscompress']).on('change', browserSync.reload);
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
        .pipe(notify("CSS - Sass compilado"));
});


// Función para minificar archivos .js. Notifica cuando la tarea se realiza
gulp.task('jscompress', function() {
    gulp.src('assets/js/src/ready.js')
        .pipe(rename('application.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(notify("JS - JS comprimido"));
});