import { Form , Modal, Button } from 'antd';
import React, { Component} from 'react';

const FormItem = Form.Item;

const dispatchValues = (e, actions, form) => {
    e.preventDefault()
    e.stopPropagation();
    form.validateFields((err, values) => {
       if (err) { return; }
       form.resetFields();
       actions(values);
  })
}

export const MyForm = Form.create()(
	(props) => {
		const { template, form, onSubmit } = props;
		const { getFieldDecorator } =  form;
		console.log(onSubmit)
		return (
				<Form onSubmit={ (e) => dispatchValues(e, onSubmit, form ) } layout="vertical">
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
