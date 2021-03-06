import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';
import notifications from './notifications';
import locations from './locations';


export default combineReducers({
  routing: routerReducer,
  tasks,
  notifications,
  locations
});