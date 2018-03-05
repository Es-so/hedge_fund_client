import { Form , Modal } from 'antd';
import React, { Component} from 'react';

const FormItem = Form.Item;

export const FormModal = Form.create()(
	(props) => {
		return (
			<Modal
				visible={ visible }
				title={ template.title }
				okText={ template.okText }
				cancelText={ template.cancelText }
				onCancel={ onCancel }
				onOk={ onCreate } 
			>
				<Form  onSubmit={ onCreate } layout="vertical">
					<FormItem label={ template.title }>
					</FormItem>
					{
						template.form.map((obj, key) => {
							return(	getFieldDecorator(obj.field, {
												rules: obj.rules,
												})(obj.element))
							})
					}
				</Form>
			</Modal>
		);
	}
)
