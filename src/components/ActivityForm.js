import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import PropTypes from 'prop-types';


class ActivityForm extends Component {

    state = {
      name: '',
      end_time: '',
      start_time: '',
    }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
      }

  handleSubmit = () => {
    const activity = {
      name: this.state.name,
      start_time: this.state.start_time,
      end_time: this.state.end_time,
      schedule_id: this.props.schedule.id
    }
    this.props.scheduleActions.addActivity(activity)
  }

  render() {
    return (
      <div className="tile">
        <form onSubmit={this.handleSubmit} >
        <input className='input' type="text"
          name="name" placeholder='Enter an activity'
          value={this.state.title} onChange={this.handleInput}
          ref={this.props.titleRef} />
          <input type="time" className='input' name="start_time"
            value={this.state.start_time} onChange={this.handleInput}>
          </input>
          <input type="time" className='input' name="end_time"
            value={this.state.end_time} onChange={this.handleInput}>
          </input>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

ActivityForm.propTypes = {
    scheduleActions: PropTypes.object,
    schedule: PropTypes.array
};

function mapStateToProps(state) {
    return {
        schedule: state.schedule.schedule
          };
}

function mapDispatchToProps(dispatch) {
    return {
       scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);
