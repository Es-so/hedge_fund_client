import { API_CUSTOMER_HOST, API_CUSTOMER_PORT } from '../constants/logs'

export const GET_CUSTOMERS = "GET_CUSTOMERS";
export const SET_CUSTOMER = "SET_CUSTOMER";

export const GET_DEPOSIT = "GET_DEPOSIT";
export const SET_DEPOSIT = "SET_DEPOSIT";

export const ARCHIVE_CUSTOMER = 'ARCHIVE_CUSTOMER';

export const setCustomer = payload => ({
	type: SET_CUSTOMER,
	payload,
});

export const setDeposit = payload => ({
	type: SET_CUSTOMER,
	payload,
});

export const getCustomers = payload => ({
	type: GET_CUSTOMERS,
	payload,
});

export const getDeposit = payload => ({
	type: GET_DEPOSIT,
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

// export const setCustomerDeposit = () => dispatch => 
// fetch('http://138.68.31.95:5000/api/investment', {
// 		        headers: {'Content-Type':'application/x-www-form-urlencoded'},
// 		        method: 'post',
// 		        body: "idcustomers="+ id_customer + "&amount="+ values.amount + "&currency="+ values.currency + "&amount_dollar="+ values.amount_dollar + "&date=" + date[0]
// 		    }).then((response) =>  {
// 		    	return response.json()
// 		    })


export const addCustomer = () => dispatch => 
	console.log("setting customer")

// let customer_data = []
// const data = json
// for (let i in data) {
// const f_name = data[i]["firstname"]
// const l_name = data[i]["lastname"]
// const mail = data[i]["mail"]
// const id_cust = data[i]["idcustomers"]
// const start_date = data[i]["start_date"]
// customer_data.push({ f_name, l_name, mail, id_cust, start_date })


// Lib.addDeposit = (id_customer, values) => {
// 	const date = new Date(values.date).toISOString().split("T");
// 	return 
// }
