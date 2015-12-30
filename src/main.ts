import {bootstrap} from 'angular2/platform/browser';
import {platform, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {BrowserDomAdapter} from 'angular2/src/platform/browser/browser_adapter';
import {BROWSER_PROVIDERS} from 'angular2/platform/browser';

import {AuthService} from './services/Auth';
import {Backend, BackendConfig} from './services/Backend';
import {Nav} from './services/Nav';

const FIREBASE_URL = 'https://ng2-forum-demo.firebaseio.com';

import {App} from './app/app';

platform([BROWSER_PROVIDERS])
  .application([
    BrowserDomAdapter,
    ROUTER_PROVIDERS,
    AuthService,
    Backend,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(BackendConfig, {useValue: {url: FIREBASE_URL }})
  ])
  .bootstrap(App);
