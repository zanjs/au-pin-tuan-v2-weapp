const setting = {
  path: './src/',
  dev: {
    repUrl: 'https://au.anla.io/',
    path: 'dev',
    http: 'http://',
  },
  test: {
    repUrl: 'https://we-app-man.github.io/au-tuan-s/',
    path: 'test',
    http: 'http://',
  },
  build: {
    repUrl: 'https://we-app-man.github.io/au-tuan-s/',
    path: './build',
    http: 'https://',
  },
  template: '.wxml',
  watchFiles: ['src/**/*.*'],
  appScss: 'src/app.scss',
}
module.exports = setting