var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

// ... variables
var input = './styles/sass/**/*.+(scss|sass)';
var output = './styles/css';

var sassOptions = {
    includePaths: ['./styles/sass'],
    errLogToConsole: true,
    outputStyle: 'expanded'
  };
  
var autoprefixerOptions = {
    browsers: ['> 5%', 'last 3 versions', 'last 6 iOS versions', 'last 6 Safari versions']
};


//tarea para compilar sass y autoprefixer para una sola ejecucion + browsersync
gulp.task('sassServe', function () { 
return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(postcss([ autoprefixer(autoprefixerOptions) ]))
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});

gulp.task('serve',function() {
    browserSync.init({
        // port: 9999, //usar esto cuando se quiera usar otro puerto
        server: "./"
    });

    gulp.watch(input,['sassServe']);
    gulp.watch("./js/*").on('change', browserSync.reload); //por ahora solo el index.html
    gulp.watch("./*.html").on('change', browserSync.reload); //por ahora solo el index.html
});