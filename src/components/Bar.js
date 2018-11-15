import React, { Component } from 'react'
import Slice from './Slice'


class Bar extends Component {

	render() {
    let barTime = this.props.barData/60
    return (
    <svg className="svg" width="100" height="500">
		  <rect className="bar" x="1" width="31" y="129.16863486065182" height="320.8313651393482"></rect>
    </svg>
    )
	}
};

export default Bar
