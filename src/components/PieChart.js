import React, { Component } from 'react'
import Pie from './Pie'

class PieChart extends Component {

		state = {
			data: [5, 12, 8, 3, 10]
		}

	render() {
		var colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

		return (
		<div>
			<Pie
				data={ this.state.data }
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
	}
};

export default PieChart
