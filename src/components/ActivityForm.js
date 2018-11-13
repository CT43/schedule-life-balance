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

    durationCalculator(time) {
      debugger
      let hour
      let min
      let totalMin
      let ints;
      ints = time.split(':')
      hour = parseInt(ints['0'])
      min = parseInt(ints['1'])
      return (hour * 60 + min)
    }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
      }

  handleSubmit = (e) => {
    e.preventDefault()
    const activity = {
      name: this.state.name,
      start_time: this.state.start_time,
      end_time: this.state.end_time,
      schedule_id: this.props.schedule.id,
      start_time_min: this.durationCalculator(this.state.start_time),
      end_time_min: this.durationCalculator(this.state.end_time),
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
            value={this.state.end_time} onChange={this.handleInput} />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

ActivityForm.propTypes = {
    scheduleActions: PropTypes.object,
    schedule: PropTypes.object
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
