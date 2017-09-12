import gulp from 'gulp'
import clean from 'gulp-clean'
import setting from './bash/setting'
import build from './bash/build'

const srcPath = setting.path
const buildPath = setting.build.path

gulp.task('watch', ['build:dev'], () => {
  build.watch()
})
gulp.task('build:dev', () => {
  build.css(`${srcPath}**/*.scss`)
  build.js(`${srcPath}**/*.js`)
  build.template(`${srcPath}**/*.html`)
  build.json(`${srcPath}**/*.+(json)`)
  build.assets(`${srcPath}**/*.+(wxml|wxss|svg|png|gif|jpeg)`)
})
gulp.task('build:pre', () => {
  build.css(`${srcPath}**/*.scss`, 'build')
  build.js(`${srcPath}**/*.js`, 'build')
  build.template(`${srcPath}**/*.html`, 'build')
  build.json(`${srcPath}**/*.+(json)`, 'build')
  build.assets(`${srcPath}**/*.+(wxml|wxss|svg|png|gif|jpeg)`, 'build')
})
gulp.task('build:test', () => {
  build.css(`${srcPath}**/*.scss`, 'test')
  build.js(`${srcPath}**/*.js`, 'test')
  build.template(`${srcPath}**/*.html`, 'test')
  build.json(`${srcPath}**/*.+(json)`, 'test')
  build.assets(`${srcPath}**/*.+(wxml|wxss|svg|png|gif|jpeg)`, 'test')
})

gulp.task('clean', () => gulp.src([buildPath])
  .pipe(clean()))