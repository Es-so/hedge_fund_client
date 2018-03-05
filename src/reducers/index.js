import { combineReducers } from 'redux';

import general from './general';
import customers from './customers';
import positions from './positions';

/**
 * Reducers
 * @type {Object} 
 */
const pumaShop = combineReducers({
	general,
	customers,
	positions,
});

export default pumaShop;
 