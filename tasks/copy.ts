declare var require;
var path = require('path');
export const copy  = (gulp, config) => {

	gulp.task('copy:dev', () => {
		return gulp.src(config.staticFiles)
		  .pipe(gulp.dest(config.dist));
	});

  gulp.task('copy:angular', makeCopyFn('angular2'));
  gulp.task('copy:typescript', makeCopyFn('typescript'));
  gulp.task('copy:rxjs', makeCopyFn('rxjs'));
  gulp.task('copy:reflect-metadata', makeCopyFn('reflect-metadata'));
  gulp.task('copy:systemjs', makeCopyFn('systemjs'));
  gulp.task('copy:zone.js', makeCopyFn('zone.js'));
  gulp.task('copy:firebase', makeCopyFn('firebase'));

  gulp.task('copy:all', [
    'copy:dev',
    'copy:angular',
    'copy:typescript',
    'copy:rxjs',
    'copy:reflect-metadata',
    'copy:zone.js',
    'copy:firebase',
    'copy:systemjs'
  ]);


  function makeCopyFn(name:string): Function {
    return () => {
      return gulp.src(config[name])
        .pipe(gulp.dest(path.resolve(config['dist'], name)));
    }
  }

};
