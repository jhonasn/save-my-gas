var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var cleanCSS = require('gulp-clean-css')
var htmlreplace = require('gulp-html-replace')
var replace = require('gulp-replace')
var del = require('del')
var sass = require('gulp-sass')

gulp.task('clean', function() {
    return del([
        '../web-app/js/*',
        '../web-app/css/*',
    ])
})

gulp.task('min-login-js', function() {
    return gulp.src([
            'www/lib/jquery/dist/jquery.js',
            'www/lib/materialize/dist/js/materialize.js',
            'www/lib/angular/angular.js',
            'www/lib/ngstorage/ngStorage.js',
            'www/lib/angular-materialize/src/angular-materialize.js',
            'www/js/app-login.js',
            'www/js/config.js',
            'www/js/services/auth-service.js',
            'www/js/controllers/auth-controller.js',
            'www/js/bootstrap.js',
            'www/js/services/root-route-service.js',
        ])
        .pipe(concat('/js/app-login.js'))
        .pipe(ngAnnotate())
        // .pipe(uglify())
        .pipe(gulp.dest('../web-app'))
})

gulp.task('min-login-css', function() {
    return gulp.src([
            'www/lib/roboto-and-material-icons-fonts/css/material-icons.css',
            'www/lib/roboto-and-material-icons-fonts/css/roboto.css',
            // 'www/lib/materialize/dist/css/materialize.css',
            'www/css/materialize.css',
            'www/css/login.css',
        ])
        .pipe(concat('/css/login.css'))
        .pipe(replace('fonts/roboto/', 'fonts/'))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('../web-app'))
})

gulp.task('min-app-js', function() {
    return gulp.src([
            'www/lib/jquery/dist/jquery.js',
            'www/lib/materialize/dist/js/materialize.js',
            'www/lib/angular/angular.js',
            'www/lib/angular-route/angular-route.js',
            'www/lib/angular-resource/angular-resource.js',
            'www/lib/angular-messages/angular-messages.js',
            'www/lib/ngstorage/ngStorage.js',
            'www/lib/ngCordova/dist/ng-cordova.js',
            'www/lib/angular-materialize/src/angular-materialize.js',
            'www/lib/angular-bootstrap/ui-bootstrap-tpls.js',
            'www/js/*.js',
            'www/js/**/*.js',
        ])
        .pipe(concat('/js/app.js'))
        .pipe(ngAnnotate())
        // .pipe(uglify())
        .pipe(gulp.dest('../web-app'))
})

gulp.task('min-app-css', function() {
    return gulp.src([
            'www/lib/roboto-and-material-icons-fonts/css/material-icons.css',
            'www/lib/roboto-and-material-icons-fonts/css/roboto.css',
            // 'www/lib/materialize/dist/css/materialize.css',
            'www/css/materialize.css',
            'www/lib/angular-bootstrap/ui-bootstrap-csp.css',
            'www/css/main.css',
        ])
        .pipe(concat('/css/main.css'))
        .pipe(replace('fonts/roboto/', 'fonts/'))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('../web-app'))
})

gulp.task('copy', function() {
    return gulp.src([
            'www/*img/*',
            'www/*img/icons/*',
            'www/*templates/*',
            'www/*views/*',
            'www/*views/**/*',
            'www/lib/roboto-and-material-icons-fonts/*fonts/*',
        ])
        .pipe(gulp.dest('../web-app'))
})

gulp.task('html-build', function() {
    return gulp.src([
            'www/*.*',
        ])
        .pipe(htmlreplace({
            'css-login': 'css/login.css',
            'js-login': 'js/app-login.js',
            'css-app': 'css/main.css',
            'js-app': 'js/app.js',
        }))
        .pipe(gulp.dest('../web-app'))
})

gulp.task('materialize-sass', function() {
    return gulp.src('./www/lib/materialize/sass/materialize.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./www/css/'))
})

gulp.task('default', [
    // 'clean',
    'min-login-js',
    'min-login-css',
    'min-app-js',
    'min-app-css',
    'copy',
    'html-build'
])
