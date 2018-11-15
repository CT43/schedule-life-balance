import * as allActions from './allActions';
import axios from 'axios'
import update from 'immutability-helper'


export function fetchSchedule(id) {
    return (dispatch) => {
    axios.get(`http://localhost:3001/api/v1/schedule/${id}`)
    .then(response => {
      dispatch({type: 'RECEIVE_SCHEDULE', schedule: response.data})
    })
    .catch(error => console.log(error))
  };
}
export function fetchScheduleActivities(id) {
    return (dispatch) => {
    axios.get(`http://localhost:3001/api/v1/activity/${id}`)
    .then(response => {
      dispatch({type: 'RECEIVE_ACTIVITIES', activities: response.data})
    })
    .catch(error => console.log(error))
  };
}

export function addNewSchedule() {
    return (dispatch) => {
      axios.post(
        'http://localhost:3001/api/v1/schedules',
        { schedule:
          {
            title: '',
            date: ''
          }
        }
      )
      .then(response => {
        dispatch({type: 'ADD_SCHEDULE', schedule: response.data})

      })
      .catch(error => console.log(error))
  };
}

export function enableEditing(id) {
    return (dispatch) => {
        dispatch({type: 'ENABLE_EDITING', id: id})
      }
}

export function addActivity(activity) {
    return (dispatch) => {
      axios.post(
        `http://localhost:3001/api/v1/activities`,
        {
          activity:
            { name: `${activity.name}`,
          start_time: activity.start_time,
          end_time: activity.end_time,
          schedule_id: activity.schedule_id,
          start_time_min: activity.start_time_min,
          end_time_min: activity.end_time_min,
        }
        })
      .then(response => {
        dispatch({type: 'ADD_ACTIVITY', activity: response.data})
      })
      .catch(error => console.log(error))
  };
}

export function deleteIdea(id) {
    return (dispatch) => {
      axios.delete(`http://localhost:3001/api/v1/ideas/${id}`)
      .then(response => {
        dispatch({type: 'DELETE_IDEA', id: id})
      })
      .catch(error => console.log(error))
  };
}
