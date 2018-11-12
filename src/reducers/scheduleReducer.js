import initialState from './initialState';
import update from 'immutability-helper'
import {FETCH_IDEAS, RECEIVE_IDEAS, ADD_IDEA, DELETE_IDEA, UPDATE_IDEA, ENABLE_EDITING, RESET_NOTIFICATION} from '../actions/allActions';

export default function ideas(state = {
  ideas: [],
  editingIdeaId: null,
  notification: ''
}, action) {
  let newState;
  let ideas;
  let ideaIndex
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
    case UPDATE_IDEA:
      console.log('UPDATE_IDEA Action')
      ideaIndex = state.ideas.findIndex(x => x.id === action.idea.id)
      ideas = update(state.ideas, {[ideaIndex]: { $set: action.idea }})
      return {ideas: ideas, editingIdeaId: action.idea.id, notification: 'Successfully saved'}
    case DELETE_IDEA:
      console.log('DELETE_IDEA Action')
      ideaIndex = state.ideas.findIndex(x => x.id === action.id)
      ideas = update(state.ideas, { $splice: [[ideaIndex, 1]]})
      return {ideas: ideas, editingIdeaId: null, notification: 'Successfully deleted'}
    default:
      return state;
  }
}
