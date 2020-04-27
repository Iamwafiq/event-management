import {LOGIN, 
		LOGIN_SUCCESS, 
		LOGIN_ERROR, 
		ADD_EVENT, 
		ADD_EVENT_SUCCESS, 
		ADD_EVENT_ERROR, 
		GET_EVENTS, 
		GET_EVENTS_SUCCESS, 
		GET_EVENTS_ERROR,
		RESET_ERROR}
		 from './constants'



export function login (payload) {
	return { 
	  	type: LOGIN, 
	  	payload 
	}
};

export function loginSuccess (payload) {

	return { 
	  	type: LOGIN_SUCCESS, 
	  	payload 
	}
};

export function loginError (payload) {

	return { 
	  	type: LOGIN_ERROR, 
	  	payload 
	}
};

export function resetError () {
	return { 
	  	type: RESET_ERROR, 
	}
};

export function addEvent(payload) {

	return { 
	  	type: ADD_EVENT, 
	  	payload 
	}
};
export function addEventSuccess(payload) {

	return { 
	  	type: ADD_EVENT_SUCCESS, 
	  	payload 
	}
};
export function addEventError(payload) {

	return { 
	  	type: ADD_EVENT_ERROR, 
	  	payload 
	}
};

export function getEvents() {
	return { 
	  	type: GET_EVENTS, 
	}
};
export function getEventsSuccess(payload) {
	return { 
	  	type: GET_EVENTS_SUCCESS, 
	  	payload 
	}
};
export function getEventsError(payload) {
	return { 
	  	type: GET_EVENTS_ERROR, 
	  	payload 
	}
};
