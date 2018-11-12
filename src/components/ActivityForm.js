import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import PropTypes from 'prop-types';


class ActivityForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
      }

  handleBlur = () => {
    const idea = {
      title: this.state.title,
      body: this.state.body,
      id: this.props.editingIdeaId
    }
    this.props.ideaActions.updateIdea(idea)
  }

  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur} >
        <input className='input' type="text"
          name="title" placeholder='Enter a Title'
          value={this.state.title} onChange={this.handleInput}
          ref={this.props.titleRef} />
          <textarea className='input' name="body"
            placeholder='Describe your idea'
            value={this.state.body} onChange={this.handleInput}>
          </textarea>
        </form>
      </div>
    );
  }
}

ActivityForm.propTypes = {
    ideaActions: PropTypes.object,
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
