import initialState from './initialState';
import update from 'immutability-helper'
import {FETCH_IDEAS, RECEIVE_IDEAS, ADD_IDEA, DELETE_IDEA, UPDATE_IDEA} from '../actions/allActions';

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
    case UPDATE_IDEA:
      console.log('UPDATE_IDEAS Action')
      debugger
      ideas = update(state.ideas, {
        $splice: [[0, 0, action.idea]]
      })
      return {ideas: ideas, editingIdeaId: null, notification: '' }
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
