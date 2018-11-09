import * as allActions from './allActions';
import axios from 'axios'
import update from 'immutability-helper'


export function fetchIdeas() {
    return (dispatch) => {
    axios.get('http://localhost:3001/api/v1/ideas.json')
    .then(response => {
      dispatch({type: 'RECEIVE_IDEAS', ideas: response.data})
    })
    .catch(error => console.log(error))
  };
}

export function addNewIdea() {
    return (dispatch) => {
      axios.post(
        'http://localhost:3001/api/v1/ideas',
        { idea:
          {
            title: '',
            body: ''
          }
        }
      )
      .then(response => {
        dispatch({type: 'ADD_IDEA', idea: response.data})

      })
      .catch(error => console.log(error))
  };
}

export function enableEditing(id) {
    return (dispatch) => {
        dispatch({type: 'ENABLE_EDITING', id: id})
      }
}

export function updateIdea(idea) {
    return (dispatch) => {
      axios.put(
        `http://localhost:3001/api/v1/ideas/${idea.id}`,
        {
          idea: { title: `${idea.title}`,
          body: `${idea.body}`}
        })
      .then(response => {
        dispatch({type: 'UPDATE_IDEA', idea: response.data})
      })
      .catch(error => console.log(error))
  };
}
