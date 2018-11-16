import update from 'immutability-helper'
import { ADD_SCHEDULE, ADD_ACTIVITY, FETCH_SCHEDULE, RECEIVE_SCHEDULE, RECEIVE_ACTIVITIES, DELETE_ACTIVITY, DELETE_SCHEDULE} from '../actions/allActions';

export default function schedules(state = {
  schedule: {},
  activities: [],
}, action) {
  let newSchedule;
  let schedule;
  let activity;
  let activityIndex;
  let activities;
  switch (action.type) {
    case FETCH_SCHEDULE:
      console.log('FETCH_SCHEDULE Action')
      return action;
    case RECEIVE_SCHEDULE:
      newSchedule = action.schedule;
      console.log('RECEIVE_SCHEDULE Action')
      return {activities: state.activities, schedule: newSchedule}
    case RECEIVE_ACTIVITIES:
      activities = action.activities
      console.log('RECEIVE_ACTIVITIES Action')
      return {activities: activities, schedule: state.schedule}
    case ADD_SCHEDULE:
      console.log('ADD_SCHEDULES Action')
      schedule = action.schedule
      return { schedule: schedule, activities: []}
    case ADD_ACTIVITY:
      console.log('ADD_ACTIVITY Action')
      activities = update(state.activities, {
        $splice: [[0, 0, action.activity]]
      })
      return { schedule: state.schedule, activities: activities}
    case DELETE_ACTIVITY:
      console.log('DELETE_ACTIVITY Action')
      activityIndex = state.activities.findIndex(x => x.id === action.id)
      activities = update(state.activities, { $splice: [[activityIndex, 1]]})
      return {schedule: state.schedule, activities: activities}
    case DELETE_SCHEDULE:
      console.log('DELETE_SCHEDULE Action')
      return {schedule: {}, activities: []}
    default:
      return state;
  }
}
