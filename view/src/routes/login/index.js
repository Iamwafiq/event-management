import React from "react";
import './createuser.css'
import { connect } from "react-redux";
import { Form, Input, InputNumber, Button, DatePicker }  from 'antd';
import 'antd/dist/antd.css'; 
import { login, resetError } from "../../actions";
import {bindActionCreators} from 'redux';
import FormHeader from '../Form/Components/FormHeader';
import { message } from 'antd';

class Login extends React.Component{

  onFinish(values) {
    this.props.dispatch(login(values));

 }

 static getDerivedStateFromProps(nextProps, prevState){
   if(nextProps.email.length && !nextProps.error.length){
    window.localStorage.setItem('token', nextProps.email );
    setTimeout(() => window.location.assign('/createEvent'), 1000)
    message.success('Login Successful');
    
  }
  else return null;
}

	render() {	

	const layout = {
	  labelCol: { span: 6 },
	  wrapperCol: { span: 16 },
	};

	const validateMessages = {
  	required: '${label} is required!',
  	types: {
    	email: 'Email is not validate email!',
  	},
  	number: {
    	range: '${label} must be between ${min} and ${max}',
  	},
	};


	return(
		<div className="login-box">
			<FormHeader/>
			<Form {...layout}  size="medium" onFinish={this.onFinish.bind(this)} validateMessages={validateMessages}>
			 <Form.Item name={['User', 'email']} label="Email" rules={[{ type: 'email', required: true  }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['User', 'password']} label="Password" rules={[{ required: true }]}>
        <Input.Password minLength={6}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
		     <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
			</div>
		)
	}
}


function mapStateToProps (props) {
  return {
    ...props,
  }
}

export default connect(mapStateToProps)(Login);

