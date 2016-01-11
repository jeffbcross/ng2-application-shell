import {bootstrap} from 'angular2/platform/browser';
import {platform, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, PathLocationStrategy} from 'angular2/router';

import {AuthService} from './services/Auth';
import {Backend, BackendConfig} from './services/Backend';
import {Nav} from './services/Nav';

const FIREBASE_URL = 'https://ng2-forum-demo.firebaseio.com';

import {App} from './app/app';

bootstrap(App,[
	ROUTER_PROVIDERS,
	AuthService,
	Backend,
  provide(LocationStrategy, {useClass: PathLocationStrategy}),
	provide(BackendConfig, {useValue: {url: FIREBASE_URL }})
]);

