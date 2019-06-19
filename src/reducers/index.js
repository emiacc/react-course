import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  form: reducer,
  auth: authReducer
});