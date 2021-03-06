import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class ScheduleSearch extends Component {

  state = {
    id: '',
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
    this.props.history.push(`/schedule/${id}`)
    this.setState({id: ''})
  }

  render() {
    let linktarget = `/schedule/${this.state.id}`;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} >
        <FormControl className='input' type="text"
          name="id" placeholder='Find Schedule By ID'
          value={this.state.id} onChange={this.handleInput} />
            <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

ScheduleSearch.propTypes = {
    scheduleActions: PropTypes.object,
    schedules: PropTypes.array
};

function mapDispatchToProps(dispatch) {
    return {
       scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default withRouter(connect(null, mapDispatchToProps)(ScheduleSearch));
