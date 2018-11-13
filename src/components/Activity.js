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
    return(
      <li className="single-event" data-start="09:30" data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
        <a href="#0">
          <em className="event-name">Event 1</em>
        </a>
      </li>
    )
  }
}

export default Activity
