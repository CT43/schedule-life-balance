import initialState from './initialState';
import update from 'immutability-helper'
import {FETCH_IDEAS, RECEIVE_IDEAS, ADD_IDEA, DELETE_IDEA, UPDATE_IDEA, ENABLE_EDITING, RESET_NOTIFICATION, ADD_SCHEDULE, ADD_ACTIVITY, FETCH_SCHEDULE, RECEIVE_SCHEDULE} from '../actions/allActions';

export default function schedules(state = {
  schedule: {},
  activities: [],
}, action) {
  let newState;
  let ideas;
  let schedule;
  let activity;
  let activities
  let ideaIndex
  switch (action.type) {
    case FETCH_SCHEDULE:
      console.log('FETCH_SCHEDULE Action')
      return action;
    case RECEIVE_SCHEDULE:
      newState = action.schedule;
      console.log('RECEIVE_SCHEDULE Action')
      return {...state, schedule: newState}
    case ADD_SCHEDULE:
      console.log('ADD_SCHEDULES Action')
      schedule = action.schedule
      return {...state, schedule: schedule}
    case ADD_ACTIVITY:
      console.log('ADD_ACTIVITY Action')
      activities = update(state.activities, {
        $splice: [[0, 0, action.activity]]
      })
      return {...state, activites: activities}
    // case ENABLE_EDITING:
    //   console.log('ENABLE_EDITING Action')
    //   return {...state, editingIdeaId: action.id, notification: ''}
    // case UPDATE_IDEA:
    //   console.log('UPDATE_IDEA Action')
    //   ideaIndex = state.ideas.findIndex(x => x.id === action.idea.id)
    //   ideas = update(state.ideas, {[ideaIndex]: { $set: action.idea }})
    //   return {ideas: ideas, editingIdeaId: action.idea.id, notification: 'Successfully saved'}
    // case DELETE_IDEA:
    //   console.log('DELETE_IDEA Action')
    //   ideaIndex = state.ideas.findIndex(x => x.id === action.id)
    //   ideas = update(state.ideas, { $splice: [[ideaIndex, 1]]})
    //   return {ideas: ideas, editingIdeaId: null, notification: 'Successfully deleted'}
    default:
      return state;
  }
}
