import initialState from './initialState';
import {FETCH_IDEAS, RECEIVE_IDEAS, ADD_IDEA, DELETE_IDEA, UPDATE_IDEA} from '../actions/allActions';

export default function ideas(state = initialState.ideas, action) {
  let newState;
  switch (action.type) {
    case FETCH_IDEAS:
      console.log('FETCH_IDEAS Action')
      return action;
    case RECEIVE_IDEAS:
      newState = action.ideas;
      console.log('RECEIVE_IDEAS Action')
      return newState;
    case ADD_IDEA:
      newState = action.ideas;
      console.log('ADD_IDEA Action')
      return newState;
    default:
      return state;
  }
}
