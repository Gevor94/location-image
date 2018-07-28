import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';
import Auth from './components/Auth';

const Routes = (props) => (
	<BrowserRouter {...props}>
    	<div>
        	<Route exact path="/" component={App} />
        	<Route exact path="/auth" component={Auth} />
    	</div>
  	</BrowserRouter>
);

export default Routes;

