import initialState from './initialState';
import update from 'immutability-helper'
import {FETCH_IDEAS, RECEIVE_IDEAS, ADD_IDEA, DELETE_IDEA, UPDATE_IDEA} from '../actions/allActions';

export default function ideas(state = initialState.ideas, action) {
  let newState;
  let ideas;
  switch (action.type) {
    case FETCH_IDEAS:
      console.log('FETCH_IDEAS Action')
      return action;
    case RECEIVE_IDEAS:
      newState = action.ideas;
      console.log('RECEIVE_IDEAS Action')
      return newState;
    case ADD_IDEA:
      console.log('a')
      ideas = update(state, {
        $splice: [[0, 0, action.idea]]
      })
      return ideas
    default:
      return state;
  }
}
