import React, { Component } from 'react'
import Pie from './Pie'
import Bar from './Bar'
import axios from 'axios'
import update from 'immutability-helper'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import PropTypes from 'prop-types';
import Activity from './Activity';

class PieChart extends Component {

	render() {
		var colors = ['white', '#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

		if(this.props.activities.length > 0){

		return (
			<div>
					<Pie className="center"
						data={ this.props.activityData }
						radius={ 150 }
						hole={ 50 }
						colors={ colors }
						labels={ true }
						names={ this.props.activityNames }
						percent={ true }
						strokeWidth={ 3 }
						stroke={ '#fff' }
					/>
					<Bar className="right" barData={this.props.barData} />
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
	let day = 1440
	state.schedule.activities.forEach(function(activity){
			day -= activity.duration_min
			actdata.push(activity.duration_min)})
	let sum = 1440
	if(actdata.length !== 0){
	sum = actdata.reduce(add, 0);

	function add(a, b) {
    return a + b;
		}
	}

	actdata.push(day)
	let actnames = []
	state.schedule.activities.forEach(function(activity){
			actnames.push(activity.name)})
	let barData = sum
    return {
        activities: state.schedule.activities,
        schedule: state.schedule.schedule,
				activityData: actdata,
				activityNames: actnames,
				barData: barData

          };
}

function mapDispatchToProps(dispatch) {
    return {
       scheduleActions: bindActionCreators(scheduleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
