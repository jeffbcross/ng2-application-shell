declare var require;

var Builder = require('systemjs-builder');
var util = require('gulp-util');
var ts = require('gulp-typescript');

export const compile = (gulp, config) => {

	gulp.task('compile:app', () => {
    return gulp.src('src/**/*.ts')
      .pipe(ts({
        noImplicitAny: false,
        typescript: require('typescript'),
        module: 'system',
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        moduleResolution: 'node'
      }))
      .pipe(gulp.dest('dist/app'));

	});

	gulp.task('compile:serviceworker', [], () => {

		let builder = new Builder();

		return builder.loadConfig(config.system.configFile)
		  .then(() => {
				return builder.buildStatic('app/ng2-service-worker', 'dist/worker.js', {minify: util.env.production})
			})
	});
}