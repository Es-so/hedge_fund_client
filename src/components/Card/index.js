import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd'

const IndexCards = [
	{
	  key: 'tab1',
	  tab: 'Infos',
	}, 
	{
	  key: 'tab2',
	  tab: 'Deposit',
	}
];

const InfosCard = ({ data: { firstname, lastname, mail, phone, start_date } }) => 
<div>
	Firstname: { firstname }<br/>
	Lastname: { lastname }<br/>
	Mail: { mail }<br/>
	Phone: { phone }<br/>
	Start date: { start_date }
</div>;

const contentSelector = (index, data) => ({
		tab1: <InfosCard data={ data } />,
		tab2: <div> Deposit </div>,
	})[index]


class CardComponent extends Component {
	state = {
		key: 'tab1'
	}
	onTabChange = key => this.setState({ key })

	render() {
		const { customers } = this.props;
		return (
			<Card
				style={{ width: '99%' , float: "left", marginTop: "2%" }}
				title={customers.firstname + ' ' + customers.lastname}
				// extra={ <div><a onClick={(selected) => this.addDepositHandle(key)}>Add deposit</a> <a style={{marginLeft: 10}} onClick={(selected) => this.archiveCustomer(key)}>Archive</a></div>}
				tabList={ IndexCards }
				onTabChange={this.onTabChange}
			> 
			{contentSelector(this.state.key, customers)}
			</Card> 
		)
	}
}

CardComponent.propTypes = {
	customers: PropTypes.object,
  deposit: PropTypes.array,
};

CardComponent.defaultProps = {
  customers: {},
  deposit: []
};


export default CardComponent;

