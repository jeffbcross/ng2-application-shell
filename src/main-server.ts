import * as path from 'path';
import * as express from 'express';
import * as universal from 'angular2-universal-preview';

import {platform, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy} from 'angular2/router';
import {BASE_URL, SERVER_LOCATION_PROVIDERS} from 'angular2-universal-preview/server';

import {AuthService} from './services/Auth';
import {Backend, BackendConfig} from './services/Backend';
import {Nav} from './services/Nav';

const FIREBASE_URL = 'https://ng2-forum-demo.firebaseio.com';

// Angular 2
import {App} from './app/app';

let app = express();
let root = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.ng2.html', universal.ng2engine);
app.set('views', root);
app.set('view engine', 'ng2.html');

// Serve static files
app.use(express.static(root));

// Routes
app.use('/', (req, res) => {
  res.render('index', { App, providers: [
    ROUTER_PROVIDERS,
    SERVER_LOCATION_PROVIDERS,
	  AuthService,
	  Backend,
    provide(BASE_URL, {useValue: 'http://localhost:3000'}),
	  provide(BackendConfig, {useValue: {url: FIREBASE_URL }})
  ] });
});



// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});