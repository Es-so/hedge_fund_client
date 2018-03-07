import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import  CardComponent  from '../../components/Card';
import  { MyForm }  from '../../components/Form';
import  { FormAddCustomer } from '../../forms/FormAddCustomer';

import actions from '../../actions';

const cumstomerStl = {
  margin: "1%",
  padding:"1%",
  float: "left",
  width: '47%',
  height: '100%',
};

class Customers extends React.Component {

	constructor(props) {
		super(props)
    const { getCustomersData, getCustomersDeposit } = this.props.actions.customers;
    Promise.all([getCustomersData, getCustomersDeposit])
      .catch(console.error) // => todo => set error modal/notifs for err information
	}
  saveFormRef = (form) => (this.form = form);
  
	render() {
    const { customers, deposit, action: { deleteCustomer, addDepositCustomer, addCustomer } } = this.props
		return( 
        <div>
				<div style={customerStl}>
				{customers && customers.map((obj, key) =>
		(<div key={ key }>
		 <CardComponent
		   addDepositCustomer={addDepositCustomer}
		   deleteCustomer={deleteCustomer}
		   deposit={deposit}
		   customers={obj}
		 />
		 </div>))
        }
				</div>
        <div style={{ margin: "1%", padding:"1%", float: "left", width: '47%', height: '100%' }}>
          <MyForm
            onSubmit={ addCustomer }
            ref={ this.saveFormRef }
            template={ FormAddCustomer }
           />
        </div>
        </div>
			)
	}
}
 
Customers.propTypes = {
  actions: PropTypes.shape({
    getCustomers: PropTypes.func,
    createCustomer: PropTypes.func,
    addDepositCustomer: PropTypes.func,
    deleteCustomer: PropTypes.func,
    addCustomer: PropTypes.func,
  }),
	customers: PropTypes.array,
  deposit: PropTypes.array,
};

Customers.defaultProps = {
  actions: null,
  customers: [],
  deposit: [],
};

const mapStateToProps = ({ customers: { customers, deposit} }) => ({ customers, deposit })

const mapDispatchToProps = dispatch => ({
  actions: {
    customers: bindActionCreators(actions.customers, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
