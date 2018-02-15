import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class TextField extends Component {

	render() {
		return(
			<div>
				{this.props.label}:
				<input
					type="text"
					{...this.props}
					name={this.props.label.toLowerCase()}
					value={this.props.value}
					onChange={this.props.onChange}
				/>
			</div>
		)
	}

}

TextField.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}