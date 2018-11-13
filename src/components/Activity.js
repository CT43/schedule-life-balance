import React, { Component } from 'react'

class Activity extends Component {

  // handleClick = () => {
  //   this.props.onClick(this.props.idea.id)
  // }
  //
  // handleDelete = () => {
  //   this.props.onDelete(this.props.idea.id)
  // }
  addZero = (i) => {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
  }

  timeConversion = () => {
    let time = this.props.activity.start_time.to_f
    let newTime = new Date(time)
    var h = this.addZero(newTime.getHours());
    var m = this.addZero(newTime.getMinutes());
    let hi =  `${h}:${m}`
    console.log(hi)
  }


  render () {
    return(
      <li className="single-event" data-start={this.timeConversion} data-end="10:30" data-content="event-abs-circuit" data-event="event-1">
        <a href="#0">
          <em className="event-name">Event 1</em>
        </a>
      </li>
    )
  }
}

export default Activity
