const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('Jop-Project/style/*.scss')
        .on('error', sass.logError)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('index.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
});

gulp.task('js', function () {
    return gulp.src('Jop-Project/script/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
});

gulp.task('pug', () => {
    return gulp.src('Jop-Project/pug/*.pug')
        .pipe(sourcemaps.init())
        .pipe(pug({
            pretty: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
        .pipe(livereload())
});

gulp.task('watch', () => {
    gulp.watch('Jop-Project/style/*.scss', ['sass']);
    gulp.watch('Jop-Project/pug/*.pug', ['pug']);
    gulp.watch('Jop-Project/pug/partials/*.pug', ['pug']);
    gulp.watch('Jop-Project/script/*.js', ['js']);
});

gulp.task('connect', () => {
    connect.server({
        port: 8000,
        root: './',
        livereload: true
    })
});

gulp.task('default', ['connect', 'watch']);