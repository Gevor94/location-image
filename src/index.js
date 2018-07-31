import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'mobx-react';

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import authStore from './stores/authStore';
import dashboardStore from './stores/dashboardStore';

const stores = {
	authStore,
	dashboardStore
};

render(<Provider {...stores}> 
		<Routes />
	</Provider>, 
document.getElementById('root'));

registerServiceWorker();
