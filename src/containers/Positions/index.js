import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../../actions';

import { Layout } from 'antd';

class Positions extends React.Component {

	constructor(props) {
		super(props)
	} 

	render() {
		return( 

				// <div className="verticalLine"></div>
				<div style={{margin: "1%", padding:"1%", float: "left",width: '40%', height: '100%' }}>
					Hello Positions
				</div>
			)
	}
}

// Customers.propTypes = {
//   actions: PropTypes.shape({
//     createCustomer: PropTypes.func,
//     addDepositCustomer: PropTypes.func,
//     archiveCustomer: PropTypes.func,
//   }),
//   data: PropTypes.shape({
//   	customers: PropTypes.object,
//   	deposit: PropTypes.object
//   }),
// };

// Customers.defaultProps = {
//   actions: null,
//   data: {},
// };

// const mapStateToProps = ({ tellers }) => ({
//   tellers,
// });

// const mapDispatchToProps = dispatch => ({
//   actions: {
//     customers: bindActionCreators(actions.customers, dispatch),
//   },
// });

export default connect(null, null)(Positions);
