var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

function user_style(done) {
    gulp.src('./scss/styles.scss')
    .pipe(sass({
        errorLogToConsole:true,
        outputStyle:'compressed'
    }))
    .on('error',console.error.bind(console))
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./css/'));

    done();
}

gulp.task(user_style);
