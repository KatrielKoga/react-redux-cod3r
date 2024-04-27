import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import Dashboard2 from '../dashboard2/dashboard2';

export default props => (
	<Router history={hashHistory}>
		<Route path="/" component={Dashboard} />
		<Route path="/dashboard2" component={Dashboard2} />
		<Route path="/billingCycles" component={BillingCycle} />
		<Redirect from="*" to="/" />
	</Router>
);
