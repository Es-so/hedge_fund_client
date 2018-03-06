import { GET_CUSTOMERS , GET_DEPOSIT , SET_CUSTOMER , REMOVE_CUSTOMER } from '../actions/customers';

export default (state = [], { payload, type }) => {

  switch (type) {
		case GET_CUSTOMERS:

      return ({ ...state, customers: payload });

    case GET_DEPOSIT:
      return  ({ ...state, deposit: payload });

    case SET_CUSTOMER:
    	console.log(payload, "set")

    case REMOVE_CUSTOMER:
    	return ( { ...state, customers : state.customers.filter(({ idcustomers }) => idcustomers !== payload) } );
    	
    default:
      return state;
  }
};

