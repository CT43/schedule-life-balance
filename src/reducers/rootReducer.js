import {combineReducers} from 'redux';
import ideas from './ideaReducer';
import schedule from './scheduleReducer';

const rootReducer = combineReducers({
  ideas: ideas,
  schedule: schedule
});

export default rootReducer;
