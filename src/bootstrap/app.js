import React from 'react';
import { Provider } from 'react-redux';

import generateStore from './generateStore';
// import config from './config';
// import registerServiceWorker from './registerServiceWorker';
import RouterComponent from './router';

import 'antd/dist/antd.css'

/**
 * Init app
 */ 
 


const App = () => (
	<Provider store={ generateStore() }>
		<RouterComponent />
	</Provider>
);

// registerServiceWorker();

export default App;
