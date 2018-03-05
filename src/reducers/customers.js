import { GET_CUSTOMERS , GET_DEPOSIT } from '../actions/customers';

export default (state = [], { payload, type }) => {

  switch (type) {
		case GET_CUSTOMERS:

      return ({ ...state, customers: payload })

    case GET_DEPOSIT:

      return  ({ ...state, deposit: payload })

    default:
      return state;
  }
};

