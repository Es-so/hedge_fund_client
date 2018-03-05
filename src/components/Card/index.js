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

const InfosCard = (props) => 
<div>
	Firstname: { props.data.firstname }<br/>
	Lastname: { props.data.lastname }<br/>
	Mail: { props.data.mail }<br/>
	Phone: { props.data.phone }<br/>
	Start date: { props.data.start_date }
</div>;

const contentSelector = (index, data) => {
	let content = {
		tab1: <InfosCard data={ data } />,
		tab2: <div> Deposit </div>,
	}
	return(content[index])
}


class CardComponent extends Component {
	state = {
		key: 'tab1'
	}
	onTabChange = (key) => {
		this.setState( { key: key } )
	}

	render() {
		const { customers } = this.props;
		return (
			<Card
				style={{ width: '99%' , float: "left", marginTop: "2%" }}
				title={customers.firstname + ' ' + customers.lastname}
				// extra={ <div><a onClick={(selected) => this.addDepositHandle(key)}>Add deposit</a> <a style={{marginLeft: 10}} onClick={(selected) => this.archiveCustomer(key)}>Archive</a></div>}
				tabList={ IndexCards }
				onTabChange={ (index) => { this.onTabChange(index); } }
			> 
			{
				contentSelector(this.state.key, customers)
			}
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

