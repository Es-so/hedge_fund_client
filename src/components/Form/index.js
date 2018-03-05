import { Form , Modal, Button } from 'antd';
import React, { Component} from 'react';

const FormItem = Form.Item;

export const MyForm = Form.create()(
	(props) => {
		const { template, form, onSubmit } = props;
		const { getFieldDecorator } =  form;
		return (
				<Form onSubmit={onSubmit} layout="vertical">
					<FormItem label={ template.title }>
					</FormItem>
					{
						template.form.map((obj, key) => {
							return(	<span key={ key }> 
											{
												getFieldDecorator(obj.field, { rules: obj.rules, })(obj.element) 
											} 
											</span>)
							})
					}
				<FormItem >
					<Button type="primary" htmlType="submit" >Add</Button>
			  </FormItem>
				</Form>
		);
	}
)
