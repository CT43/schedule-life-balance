import React, { Component } from 'react'

class Activity extends Component {

  // handleClick = () => {
  //   this.props.onClick(this.props.idea.id)
  // }
  //
  handleDelete = () => {
    this.props.onDelete(this.props.activity.id)
  }


  render () {
    return(
      <li className="single-event"  data-start={this.props.data_start} data-end={this.props.data_end} data-content="event-rowing-workout" data-event={this.props.data_event} style={this.props.style}>
                  <em className="event-name">{this.props.timeElement} - {this.props.activity.name}                  <span className="deleteButton" onClick={this.handleDelete}>
                                      x
                                    </span>
                  </em>

              </li>
    )
  }
}

export default Activity
