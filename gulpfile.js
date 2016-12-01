var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
//var browserify = require('browserify');

gulp.task('copyCSS', function() {
    return gulp.src([
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/patternfly/dist/css/patternfly.min.css',
        'bower_components/patternfly/dist/css/patternfly-additions.min.css',
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'css/portfolio.css',
        'css/hamburgers.min.css'
    ])
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('copyJS', function() {
    return gulp.src([
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/patternfly/dist/js/patternfly.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/webcomponentsjs/HTMLImports.min.js',
        'js/nav.js'
    ])
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('copyImages', function() {
   return gulp.src([
       'bower_components/patternfly/dist/img/spinner.gif',
       'bower_components/patternfly/dist/img/spinner-inverse.gif',
       'bower_components/patternfly/dist/img/spinner-inverse-lg.gif',
       'bower_components/patternfly/dist/img/spinner-inverse-sm.gif',
       'bower_components/patternfly/dist/img/spinner-inverse-xs.gif',
       'bower_components/patternfly/dist/img/spinner-lg.gif',
       'bower_components/patternfly/dist/img/spinner-sm.gif',
       'bower_components/patternfly/dist/img/spinner-xs.gif',
       'img/**'
   ])
       .pipe(gulp.dest('dist/img'));
});

gulp.task('copyFonts', function() {
    return gulp.src([
        'bower_components/bootstrap/dist/fonts/**',
        'bower_components/patternfly/dist/fonts/**'
    ])
        .pipe(gulp.dest('dist/fonts'));
});

// process JS files and return the stream
gulp.task('js', function () {
    return gulp.src('js/*.js')
	.pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
	    .pipe(browserSync.stream())
        .pipe(notify("CSS compiled"));
});

// ensure js finishes, reload browser
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('sass-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
})

//launch Browsersync and watch SASS & JS files
gulp.task('serve', ['sass', 'js'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("js/*.js", ['js-watch']);
    gulp.watch("sass/*.scss", ['sass-watch']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("includes/**/*.html").on('change', browserSync.reload);
});



gulp.task('default', ['copyCSS', 'copyJS', 'copyImages', 'copyFonts']);
