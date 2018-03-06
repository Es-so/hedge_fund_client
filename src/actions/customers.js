import { API_CUSTOMER_HOST, API_CUSTOMER_PORT } from '../constants/logs'
import { formatDate } from '../helpers/Date'

export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const SET_CUSTOMER = "SET_CUSTOMER";

export const GET_DEPOSIT = "GET_DEPOSIT";
export const SET_DEPOSIT = "SET_DEPOSIT";

export const ARCHIVE_CUSTOMER = "ARCHIVE_CUSTOMER";

export const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"

const setCustomer = payload => ({
	type: SET_CUSTOMER,
	payload,
});

const setDeposit = payload => ({
	type: SET_CUSTOMER,
	payload,
});

const getCustomers = payload => ({
	type: GET_CUSTOMERS,
	payload,
});

const getDeposit = payload => ({
	type: GET_DEPOSIT,
	payload,
});

const removeCustomer = payload => ({
	type: REMOVE_CUSTOMER,
	payload,
});

export const getCustomersData = () => dispatch =>
	fetch(`http://${API_CUSTOMER_HOST}:${API_CUSTOMER_PORT}/api/customer/all` )
	.then((response) => {
		return response.json();
	})
	.then((json) => {
		return dispatch(getCustomers(json))
	 })

export const getCustomersDeposit = () => dispatch =>
	fetch(`http://${API_CUSTOMER_HOST}:${API_CUSTOMER_PORT}/api/investment/all`)
	.then((response) => {
		return response.json()
	})
	.then((json) => {
		return dispatch(getDeposit(json))
	})

export const addCustomer = (values) =>  dispatch => 
	fetch(`http://${API_CUSTOMER_HOST}:${API_CUSTOMER_PORT}/api/customer`, {
		headers: {'Content-Type':'application/x-www-form-urlencoded'},
		method: 'post',
		body:  `firstname=${values.f_name }&lastname=${values.l_name}&start_date=${formatDate(values.date)[0]}&mail=${values.mail}&phone=${values.phone}`
	})
	.then((response) =>  {
		return dispatch(setCustomer(values))
	})

export const deleteCustomer = (idcustomer) => dispatch => 
	fetch(`http://${API_CUSTOMER_HOST}:${API_CUSTOMER_PORT}/api/customer?idcustomers=${idcustomer}` , {
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			method: 'delete',
	})
	.then((response) =>  {
		return dispatch(removeCustomer(idcustomer))
	})
	



