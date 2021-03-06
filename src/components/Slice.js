import React, { Component } from 'react'

class Slice extends Component {
		state =  {
			path: '',
			x: 0,
			y: 0
		};

   getAnglePoint(startAngle, endAngle, radius, x, y) {
    	var x1, y1, x2, y2;

    	x1 = x + radius * Math.cos(Math.PI * startAngle / 180);
    	y1 = y + radius * Math.sin(Math.PI * startAngle / 180);
    	x2 = x + radius * Math.cos(Math.PI * endAngle / 180);
    	y2 = y + radius * Math.sin(Math.PI * endAngle / 180);

    	return { x1, y1, x2, y2 };
    }

   getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min)) + min;
    }

	componentWillReceiveProps() {
		this.setState({ path: '' });
		this.animate();
	}

	componentDidMount() {
		this.animate();
	}

	animate() {
		this.draw(0);
	}

	draw(s) {

		var p = this.props, path = [], a, b, c, self = this, step;

		step = p.angle / (37.5 / 2);

		if (s + step > p.angle) {
			s = p.angle;
		}

		a = this.getAnglePoint(p.startAngle, p.startAngle + s, p.radius, p.radius, p.radius);
		b = this.getAnglePoint(p.startAngle, p.startAngle + s, p.radius - p.hole, p.radius, p.radius);

		path.push('M' + a.x1 + ',' + a.y1);
		path.push('A'+ p.radius +','+ p.radius +' 0 '+ (s > 180 ? 1 : 0) +',1 '+ a.x2 + ',' + a.y2);
		path.push('L' + b.x2 + ',' + b.y2);
		path.push('A'+ (p.radius- p.hole) +','+ (p.radius- p.hole) +' 0 '+ (s > 180 ? 1 : 0) +',0 '+ b.x1 + ',' + b.y1);
		path.push('Z');

		this.setState({ path: path.join(' ') });

		if (s < p.angle) {
			setTimeout(function () { self.draw(s + step) } , 16);
		} else if (p.showLabel) {
			c = this.getAnglePoint(p.startAngle, p.startAngle + (p.angle / 2), (p.radius / 2 + p.trueHole / 2), p.radius, p.radius);

			this.setState({
				x: c.x2,
				y: c.y2
			});
		}
	}

	render() {

		return (
			<g overflow="hidden">
				<path
					d={ this.state.path }
					fill={ this.props.fill }
					stroke={ this.props.stroke }
					strokeWidth={ this.props.strokeWidth ? this.props.strokeWidth : 3 }
					 />
				{ this.props.showLabel && this.props.percentValue > 4 ?
					<text x={ this.state.x } y={ this.state.y } fill="#fff" textAnchor="middle">
						{ this.props.percent ? this.props.percentValue + '%' : this.props.value }
					</text>
				: null }
			</g>
		);
	}
}

export default Slice
