import {combineReducers} from 'redux';
import ideas from './ideaReducer';
import schedules from './scheduleReducer';

const rootReducer = combineReducers({
  ideas: ideas,
  schedules: schedules
});

export default rootReducer;
