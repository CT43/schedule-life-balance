import React, { Component } from 'react'
import Pie from './Pie'
import axios from 'axios'
import update from 'immutability-helper'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import PropTypes from 'prop-types';
import Activity from './Activity';

class PieChart extends Component {

	render() {
		var colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

		if(this.props.activities.length > 0){

		return (
		<div className="center">
			<Pie
				data={ this.props.activityData }
				radius={ 150 }
				hole={ 50 }
				colors={ colors }
				labels={ true }
				percent={ true }
				strokeWidth={ 3 }
				stroke={ '#fff' }
			/>
		</div>
		);
	} else {
	return (
		<div>
			loading
		</div>
	)}
}
};

PieChart.propTypes = {
    scheduleActions: PropTypes.object,
    schedule: PropTypes.object
};

function mapStateToProps(state) {
	let actdata = []
	state.schedule.activities.forEach(function(activity){
			actdata.push(activity.duration_min)})
			debugger
    return {
        activities: state.schedule.activities,
        schedule: state.schedule.schedule,
				activityData: actdata

          };
}

function mapDispatchToProps(dispatch) {
    return {
       scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
