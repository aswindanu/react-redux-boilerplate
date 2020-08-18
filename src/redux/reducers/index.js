import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';

const rootReducer = combineReducers({
  dashboardReducer,
});

export default rootReducer;
