import { combineReducers } from 'redux';
import * as contactsReducer from './contacts'

export default combineReducers(Object.assign(
  contactsReducer
));
