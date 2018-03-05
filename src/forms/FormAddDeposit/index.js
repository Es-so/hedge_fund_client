import { Input, Select, DatePicker } from 'antd';
import React, { Component} from 'react';


export default const FormAddDeposit = {
	"title" : "Add new deposit",
	"okText" : "Add",
	"cancelText" : "Cancel",
	"form" : [
		{
			"field" : "amount",
			"rules" : [{ required: true, message: 'Please enter the amount ' }],
			"element" : <Input style={{ width: 200 }} placeholder="Amount" />
		},
		{
			"field" : "currency",
			"rules" : [{ required: true, message: 'Please enter the currency' }],
			"element" : <Select style={{ width: 200 }}>
							      <Option value="BTC">BTC</Option>
							      <Option value="ETH">ETH</Option>
							      <Option value="LTC">LTC</Option>
  								</Select>
		},
		{
			"field" : "amount_dollar",
			"rules" : [],
			"element" : <Input style={{ width: 200 }} placeholder="Amount dollar" />
		},
		{
			"field" : "date",
			"rules" : [{ required: true, message: 'Please enter the date of deposit' }],
			"element" : <DatePicker  showTime
					      format="YYYY-MM-DD HH:mm:ss"
					      style={{width: 200}} style={{width: 200}} placeholder="Date of deposit" />
		}
	]
}