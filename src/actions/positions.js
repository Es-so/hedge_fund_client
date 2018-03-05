import { API_CUSTOMER_HOST, API_CUSTOMER_PORT } from '../constants/logs'

export const BUY_POSITION  = "BUY_POSITION";
export const SELL_POSITION  = "SELL_POSITION";

export const buyPositions = payload => ({
	type: BUY_POSITION,
	payload,
});
 
export const sellPositions = payload => ({
	type: SELL_POSITION,
	payload,
});

