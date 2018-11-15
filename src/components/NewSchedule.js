import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import PropTypes from 'prop-types';

class NewSchedule extends Component {

  addNewSchedule = (e) => {
    e.preventDefault()
    this.props.scheduleActions.addNewSchedule()
  }

  // enableEditing = (id) => {
  //   this.props.ideaActions.enableEditing(id)
  //   }
  //
  // deleteIdea = (id) => {
  //   this.props.ideaActions.deleteIdea(id)
  // }


  render() {
    return (
      <div>
        <button className="newIdeaButton"
          onClick={this.addNewSchedule} >
          New Daily Schedule
        </button>
      </div>
    );
  }
}


export default NewSchedule;
