import React, { Component } from 'react'
import * as scheduleActions from '../actions/scheduleActions';

class ScheduleSearch extends Component {

  // componentDidMount() {
  //   this.props.ideaActions.fetchIdeas()
  // }

  state = {
    id: '',
  }

  addNewSchedule = (e) => {
    e.preventDefault()
    this.props.scheduleActions.addNewSchedule()
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let id;
    id = this.state.id
    this.props.scheduleActions.fetchScheduleActivities(id)
    this.props.scheduleActions.fetchSchedule(id)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        <input className='input' type="text"
          name="id" placeholder='Enter an id'
          value={this.state.id} onChange={this.handleInput} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}


export default ScheduleSearch;
