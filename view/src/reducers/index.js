import {
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    ADD_EVENT_SUCCESS, 
    ADD_EVENT_ERROR, 
    GET_EVENTS_SUCCESS, 
    GET_EVENTS_ERROR,
    RESET_ERROR} from '../constants'

const initialState = {
  email: '',
  error: '',
  success: '',
  eventData: ''
};

function rootReducer(state = initialState, action) {

	if (action.type === LOGIN_SUCCESS) {
    	return {
    	   ...state,
          email: action.payload.user.email,
      	};
  	} else if(action.type === LOGIN_ERROR) {
  		return {
  			...state,
  			error: "error"
  		};
  	}else if(action.type === ADD_EVENT_SUCCESS) {
      return {
        ...state,
      };
    }else if(action.type === ADD_EVENT_ERROR) {
      return {
        ...state,
        error: "error"
      };
    }else if(action.type === GET_EVENTS_ERROR) {
      return {
        ...state,
        error: "error"
      };
    }else if (action.type === GET_EVENTS_SUCCESS){
      console.log(action.payload.data);
      return{
        ...state,
        eventData: action.payload.data
      }
    }else if (action.type === RESET_ERROR){
      console.log(action.payload.data);
      return{
        ...state,
        error:''
      }
    }
  return state;
};

export default rootReducer;