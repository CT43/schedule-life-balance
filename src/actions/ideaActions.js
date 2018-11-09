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
        console.log(response)
        const ideas = update(this.state.ideas, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
          ideas: ideas,
          editingIdeaId: response.data.id
        })
      })
      .catch(error => console.log(error))
  };
}
