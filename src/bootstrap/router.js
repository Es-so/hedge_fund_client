import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link ,HashRouter} from 'react-router-dom';

import routes from '../constants/routes';

import Customers from '../containers/Customers';
import General from '../containers/General';
import  Positions from '../containers/Positions';

import { Menu } from 'antd';


/**
 * Router
 */
 


const RouterComponent = () => (
  <HashRouter>
  	<div>
  		<Menu
				mode="horizontal"
				theme="dark" 
			>
				<Menu.Item key="general">
					<Link to="/">General</Link>
				</Menu.Item>
				<Menu.Item key="customers">
					<Link to={{ pathname: '/customers' }}>Customers</Link>
				</Menu.Item>
				<Menu.Item key="positions">
					<Link to="/positions">Positions</Link>
				</Menu.Item>
			</Menu>
	    <Switch>
				<Route exact path={ routes.general } component={ General } />
				<Route exact path={ routes.customers } component={ Customers } />
				<Route exact path={ routes.positions } component={ Positions }/>
				<Route render={()  => <h1>Page not found</h1>} /><Redirect from="/" to={ routes.customers } />
	    </Switch>
    </div>
  </HashRouter>
);

export default RouterComponent;
