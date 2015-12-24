//TODO: service worker stuffs

System.config({
	map: {
		// app: 'app',
    angular2: 'angular'
	},
  packages: {
    angular2: {
      defaultExtension: 'js'
    },
    firebase: {
      defaultExtension: 'js',
      main: 'lib/firebase-web.js'
    },
    'reflect-metadata': {
      format: 'global'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    app: {
      defaultExtension: 'js',
      main: 'main.js'
    }
  }
});

System.import('app').catch(function(err){
	console.log(err);
});