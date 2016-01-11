//ng2 deps
import {Component} from 'angular2/core';
import {Router, Route, RouteConfig, AsyncRoute, ROUTER_DIRECTIVES} from 'angular2/router';

//app services
import {AuthService} from '../services/Auth';
import {Nav} from '../services/Nav';
import {Backend, BackendConfig} from '../services/Backend';

//generic components
import {AppHeader} from '../components/header';
import {SideNav} from '../components/sidenav';
import {Toast} from '../components/toast';

//routable components
import {Home} from '../components/Home';
import {About} from '../components/About';

@Component({
	selector: 'app',
	providers: [Backend, BackendConfig, Nav],
	directives: [AppHeader, SideNav, Toast, ROUTER_DIRECTIVES],
	template: `
			<router-outlet></router-outlet>
		`,
})
@RouteConfig([
	new Route({ name: 'Home', component: Home, path: '/home', useAsDefault: true,  }),
	new Route({ name: 'About', component: About, path: '/about' })
])
export class App {
	constructor(public backend: Backend, public nav: Nav) { }

	authenticate() {
		this.backend.authenticate()
	}
	showToast(message) { }
}