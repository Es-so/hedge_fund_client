import { Input,  DatePicker } from 'antd';
import React, { Component} from 'react';


export  const FormBuy = {
	"title" : "New Buy",
	"okText" : "Buy",
	"cancelText" : "Cancel",
	"form" : [
		{
			"field" : "base_currency",
			"rules" : [{ required: true, message: 'Please enter the base currency  ' }],
			"element" : <Input style={{width: 200}} placeholder="Base Currency" />
		},
		{
			"field" : "target_currency",
			"rules" : [{ required: true, message: 'Please enter the amount of the  Target Currency ' }],
			"element" :<Input style={{width: 200}} placeholder="Amount Target Currency" />
		},
		{
			"field" : "amount_base",
			"rules" : [{ required: true, message: 'Please enter the Amount Base Currency' }],
			"element" : <Input style={{width: 200}} placeholder="Amount Base Currency" />
		},
		{
			"field" : "amount_target",
			"rules" : [{ required: true, message: 'Please enter the Amount target Currency' }],
			"element" : <Input style={{width: 200}} placeholder="Amount target Currency" />
		},
		{
			"field" : "base_price_buy",
			"rules" : [{ required: true, message: 'Please enter the price of the base' }],
			"element" : <Input style={{width: 200}} placeholder="Price Base Buy" />
		},
		{
			"field" : "invested_dollar",
			"rules" : [{ required: true, message: 'Please enter the Dollars invested' }],
			"element" : <Input style={{width: 200}} placeholder="Dollars invested" />
		},
		{
			"field" : "current_balance",
			"rules" : [{ required: true, message: 'Please enter the current_balance' }],
			"element" : <Input style={{width: 200}} placeholder="Current Balance" />
		},
		{
			"field" : "exchange",
			"rules" : [{ required: true, message: 'Please enter the exchange' }],
			"element" : <Input style={{width: 200}} placeholder="Exchange" />
		},
			{
			"field" : "date",
			"rules" : [{ required: true, message: 'Please enter the purchase date' }],
			"element" : <DatePicker  showTime
										format="YYYY-MM-DD HH:mm:ss"
										style={{width: 200}} placeholder="Date of purchase" 
									/>
		},
	]
}

export  const FormSell = {
	"title" : "New Sell",
	"okText" : "Sell",
	"cancelText" : "Cancel",
	"form" : [
		{
			"field" : "id",
			"rules" : [{ required: true, message: 'Please enter the ID of the open Positions' }],
			"element" : <Input style={{width: 200}} placeholder="ID OPEN" />
		},
		{
			"field" : "base_currency",
			"rules" : [{ required: true, message: 'Please enter the base currency  ' }],
			"element" : <Input style={{width: 200}} placeholder="Base Currency" />
		},
		{
			"field" : "target_currency",
			"rules" : [{ required: true, message: 'Please enter the amount of the  Target Currency ' }],
			"element" :<Input style={{width: 200}} placeholder="Amount Target Currency" />
		},
		{
			"field" : "price_base_currency",
			"rules" : [{ required: true, message: 'Please enter the price of the base currency' }],
			"element" : <Input style={{width: 200}} placeholder="Price Base Currency" />
		},
				{
			"field" : "price_target_currency",
			"rules" : [{ required: true, message: 'Please enter the price of the target currency' }],
			"element" : <Input style={{width: 200}} placeholder="Price target Currency" />
		},
		{
			"field" : "amount_target",
			"rules" : [{ required: true, message: 'Please enter the Amount target Currency' }],
			"element" : <Input style={{width: 200}} placeholder="Amount target Currency" />
		},
		{
			"field" : "base_price_buy",
			"rules" : [{ required: true, message: 'Please enter the price of the base' }],
			"element" : <Input style={{width: 200}} placeholder="Price Base Buy" />
		},
		{
			"field" : "quantity",
			"rules" : [{ required: true, message: 'Please enter the  sold quantity' }],
			"element" : <Input style={{width: 200}} placeholder="Sold quantity" />
		},
			{
			"field" : "date",
			"rules" : [],
			"element" : <DatePicker  showTime
										format="YYYY-MM-DD HH:mm:ss"
										style={{width: 200}} placeholder="Date of sell" 
									/>
		},
	]
}

