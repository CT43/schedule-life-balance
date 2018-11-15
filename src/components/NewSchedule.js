import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import PropTypes from 'prop-types';

class NewSchedule extends Component {

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


  // enableEditing = (id) => {
  //   this.props.ideaActions.enableEditing(id)
  //   }
  //
  // deleteIdea = (id) => {
  //   this.props.ideaActions.deleteIdea(id)
  // }


  render() {
    if(!this.props.ideas){
        return (
            <div>
                Loading Stuff...
            </div>
        )
    }else{
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
        <input className='input' type="text"
          name="id" placeholder='Enter an id'
          value={this.state.id} onChange={this.handleInput} />
          <input type="submit" />
        </form>
        <button className="newIdeaButton"
          onClick={this.addNewSchedule} >
          New Daily Schedule
        </button>
      </div>
    );
  }
}
}

NewSchedule.propTypes = {
    scheduleActions: PropTypes.object,
    schedules: PropTypes.array
};

function mapStateToProps(state) {
    return {
        ideas: state.ideas.ideas,
        editingIdeaId: state.ideas.editingIdeaId,
        notification: state.ideas.notification,
        schedule: state.schedule.schedule,
          };
}

function mapDispatchToProps(dispatch) {
    return {
       scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSchedule);
