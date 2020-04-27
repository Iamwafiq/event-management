import React from "react";
import { getEvents } from "../../actions";
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import { Table } from 'antd';
import './view.css';
import Loader from 'react-loader'

class EventList extends React.Component {

	componentDidMount() {
    const authToken= window.localStorage.getItem('token');
    if(!authToken){
      window.location.assign('/')
    }
  	else{
		this.props.dispatch(getEvents())
  	}
  	
	}

	makeTable(eventData){
    let data= [];
    for(let i=0; i< eventData.length; i++ ){
  	
      data.push({
        title: eventData[i].title,
        location: eventData[i].location,
        email: eventData[i].email,
        date: eventData[i].date,
        phone: eventData[i].phone,
        description: eventData[i].description,
      }) 
    }

    const columns = [
		  {
		    title: 'Title',
		    dataIndex: 'title',
		    key: 'title',
		  },
		  {
		    title: 'Location',
		    dataIndex: 'location',
		    key: 'location',
		  },
		  {
		    title: 'Event Date',
		    dataIndex: 'date',
		    key: 'date',
		  },
		  {
		    title: 'Contact Email',
		    dataIndex: 'email',
		    key: 'email',
		  },
		  {
		    title: 'Contact Number',
		    dataIndex: 'phone',
		    key: 'phone',
		  },
		  {
		    title: 'More About the Event',
		    dataIndex: 'description',
		    key: 'description',
		  },
		];

    return (
    	<div className='table'>
    		<Table columns={columns} dataSource={data} />
  		</div>
  	)
  }

	render() {
		const {eventData}= this.props;

		return(
			<div className='body'>
			{this.props && this.props.eventData? (this.makeTable(eventData)) : <Loader/> }
	
			</div>
		)
	}
}

function mapStateToProps (props) {
  return {
    ...props,
  }
}

export default connect(mapStateToProps)(EventList);


