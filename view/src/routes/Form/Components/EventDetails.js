import React from 'react';
import '../form.css';
import { Form, Input, InputNumber, Button, DatePicker, message }  from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './styles.css';       
import 'antd/dist/antd.css'; 
import moment from 'moment';
import { addEvent } from "../../../actions";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";


class EventDetails extends React.Component {

  componentDidMount(){
    const authToken= window.localStorage.getItem('token');
    if(!authToken){
      window.location.assign('/login')
    }
  }

  onFinish (values) {
    values.Event.date = moment(values.date).toISOString();

    this.props.dispatch(addEvent(values));
  }

  static getDerivedStateFromProps(nextProps, prevState){
   if(nextProps.data && !nextProps.error.length){
    message.success('Event Created');
    setTimeout(() => window.location.assign('/getEvents'), 1000)
    
  }
  else return null;
}


  render() {

    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    console.log(this.props)
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };
  



    return (
    	<div className="form-component"> 
      <div className="form-data-description">
      <Form {...layout}  size="large" onFinish={this.onFinish.bind(this)} validateMessages={validateMessages}>
        <Form.Item name={['Event', 'title']} label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['Event', 'location']} label="Location" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['Event', 'date']} label="Event Date" rules={[{ required: true }]}>
         <DatePicker />
        </Form.Item>
        <Form.Item name={['Event', 'email']} label="Email" rules={[{ type: 'email', required: true  }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['Event', 'phone']} label="Phone No" rules={[{required: true, }]}>
          <Input minLength={10} maxLength={10} />
        </Form.Item>
        
        <Form.Item wrapperCol={{ span: 14 }} name={['Event', 'description']} label="More About Event" rules={[{required: true, }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button onClick={() => window.location.assign('/getEvents')}>
        View Events
      </Button>
      </div>
      </div>
    )
  }
}


function mapStateToProps (props) {
  return {
    ...props,
  }
}

export default connect(mapStateToProps)(EventDetails);











	