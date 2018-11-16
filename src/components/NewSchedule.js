import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button } from 'react-bootstrap'

class NewSchedule extends Component {

  // componentDidMount() {
  //   this.props.ideaActions.fetchIdeas()
  // }



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
        <Button className="newIdeaButton"
          onClick={this.addNewSchedule} >
          New Daily Schedule
        </Button>
      </div>
    );
  }
}

NewSchedule.propTypes = {
    scheduleActions: PropTypes.object,
    schedules: PropTypes.array
};

function mapDispatchToProps(dispatch) {
    return {
       scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(NewSchedule);
