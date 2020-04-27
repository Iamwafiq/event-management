import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {login, 
loginSuccess,
loginError,
addEvent,
addEventSuccess,
addEventError,
getEvents,
getEventsSuccess,
getEventsError} from './actions';
import {loginRequest, addEventRequest, getEventsRequest} from './api';
import {LOGIN, ADD_EVENT, GET_EVENTS} from './constants';
import { message } from 'antd';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

export function* requestLogin ({payload}) {
  console.log(payload)
   try {
      const result = yield call(loginRequest, payload);
      
      yield put(loginSuccess(result));

   } catch (e) {
      message.error('Try Again');
      yield put(loginError(e));
   }
}

export function* requestAddEvent({payload}) {
   try {
      const result = yield call(addEventRequest, payload);
      yield put(addEventSuccess(result));
      window.location.assign('/getEvents')
   } catch (e) {
      message.error('Try Again');
      yield put(addEventError(e));
   }
}

function* requestGetEvents() {
   try {
      const result = yield call(getEventsRequest,{});
      yield put(getEventsSuccess(result));
   } catch (e) {
      yield put(getEventsError(e));
   }
}


function* mySaga() {
  yield takeLatest(LOGIN, requestLogin);
  yield takeLatest(ADD_EVENT, requestAddEvent);
  yield takeLatest(GET_EVENTS, requestGetEvents);
}

export default mySaga;