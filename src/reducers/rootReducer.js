import {combineReducers} from 'redux';
import ideas from './ideaReducer';

const rootReducer = combineReducers({
  ideas: ideas
});

export default rootReducer;
