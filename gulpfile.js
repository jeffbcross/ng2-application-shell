var gulp = require('gulp');
var tsregister = require('ts-node/register');
var tsconfig = require('./tsconfig.json');

var config = {
	index: 'src/index.html',
	css:['src/**/*.scss'],
	staticFiles: [
		'src/**/*',
		'!src/**/*.ts',
		],
  angular2: 'node_modules/angular2/**/*.js',
  'angular-polyfills': 'node_modules/angular2/bundles/angular2-polyfills.min.js',
  typescript: 'node_modules/typescript/**/*.js',
  rxjs: 'node_modules/rxjs/**/*.js',
  'reflect-metadata': 'node_modules/reflect-metadata/**/*.js',
  systemjs: 'node_modules/systemjs/**/*.js',
  'zone.js': 'node_modules/zone.js/**/*.js',
  firebase: 'node_modules/firebase/**/*.js',
	dist: './dist',
	system: {
		configFile: 'system.config.js'
	}
};

require('./tasks/build').build(gulp, config);
require('./tasks/copy').copy(gulp, config);
require('./tasks/styles').compile(gulp, config);
require('./tasks/compile').compile(gulp, config);


