import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';

const Routes = (props) => (
	<BrowserRouter {...props}>
    	<div>
        	<Route exact path="/" component={App} />
    	</div>
  	</BrowserRouter>
);

export default Routes;

