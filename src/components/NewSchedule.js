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

  addNewSchedule = () => {
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
    if(!this.props.ideas){
        return (
            <div>
                Loading Stuff...
            </div>
        )
    }else{
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
        schedules: state.schedules.schedules,
          };
}

function mapDispatchToProps(dispatch) {
    return {
       scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSchedule);
