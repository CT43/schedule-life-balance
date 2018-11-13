import React, { Component } from 'react'

class Activity extends Component {

  // handleClick = () => {
  //   this.props.onClick(this.props.idea.id)
  // }
  //
  // handleDelete = () => {
  //   this.props.onDelete(this.props.idea.id)
  // }


  render () {
    debugger
    return(
      <div>
      <li className="single-event" data-start={this.props.activity.start_time} data-end={this.props.activity.end_time} data-content="event-abs-circuit" data-event="event-1">
        <a href="#0">
          <em className="event-name">Event 1</em>
        </a>
      </li>
      </div>
    )
  }
}

export default Activity
