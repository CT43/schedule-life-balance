import React, { Component } from 'react'
import Pie from '../components/Pie'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scheduleActions from '../actions/scheduleActions';
import PropTypes from 'prop-types';

class PieChartContainer extends Component {

	render() {
		var colors = ['white', '#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C', '#DC4141', 'Gold', 'Aqua', 'Wheat', 'HotPink'];

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
			</div>
		);
	} else {
	return (
		<div className="comment">
			Create a schedule and add an activity to view Charts
		</div>
	)}
}
};

PieChartContainer.propTypes = {
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
	actdata.unshift(day)
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

export default connect(mapStateToProps)(PieChartContainer);
