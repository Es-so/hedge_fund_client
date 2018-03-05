import { Input,  DatePicker } from 'antd';
import React, { Component} from 'react';


export  const FormAddCustomer = {
	"title" : "Add new customer",
	"okText" : "Add",
	"cancelText" : "Cancel",
	"form" : [
		{
			"field" : "f_name",
			"rules" : [{ required: true, message: 'Please enter the firstname ' }],
			"element" : <Input placeholder="Firstname" />
		},
		{
			"field" : "l_name",
			"rules" : [{ required: true, message: 'Please enter the lastname' }],
			"element" : <Input placeholder="Lastname" />
		},
		{
			"field" : "Email",
			"rules" : [],
			"element" : <Input placeholder="Email" />
		},
		{
			"field" : "phone",
			"rules" : [],
			"element" : <Input placeholder="Phone" />
		},
			{
			"field" : "date",
			"rules" : [{ required: true, message: 'Please enter the date' }],
			"element" : <DatePicker showTime
							      format="YYYY-MM-DD HH:mm:ss"
							      style={{width: 200}}   
							    />
		},
	]
}