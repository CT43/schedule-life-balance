import initialState from './initialState';
import update from 'immutability-helper'
import {FETCH_IDEAS, RECEIVE_IDEAS, ADD_IDEA, DELETE_IDEA, UPDATE_IDEA, ENABLE_EDITING} from '../actions/allActions';

export default function ideas(state = {
  ideas: [],
  editingIdeaId: null,
  notification: ''
}, action) {
  let newState;
  let ideas;
  switch (action.type) {
    case FETCH_IDEAS:
      console.log('FETCH_IDEAS Action')
      return action;
    case RECEIVE_IDEAS:
      newState = action.ideas;
      console.log('RECEIVE_IDEAS Action')
      return {ideas: action.ideas, editingIdeaId: null, notification: ''}
    case ADD_IDEA:
      console.log('ADD_IDEAS Action')
      ideas = update(state.ideas, {
        $splice: [[0, 0, action.idea]]
      })
      return {ideas: ideas, editingIdeaId: action.idea.id, notification: ''}
    case ENABLE_EDITING:
      console.log('ENABLE_EDITING Action')
      return {...state, editingIdeaId: action.id, notification: ''}
    default:
      return state;
  }
}

// const ideas = update(this.state.ideas, {
//   [ideaIndex]: { $set: idea }
// })
// this.setState({
//   ideas: ideas,
//   notification: 'All changes saved'
// })
