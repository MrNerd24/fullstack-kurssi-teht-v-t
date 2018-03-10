import React, {Component} from 'react'
import {Card, CardActions, CardContent} from "material-ui";
import PropTypes from 'prop-types'

export default class Container extends Component {

	render() {
		return(
			<Card style={Style.card}>
				<CardContent>
					{this.props.children}
				</CardContent>
				{this.props.actions &&
				<CardActions>
					{this.props.actions}
				</CardActions>}
			</Card>
		)
	}

}

Container.propTypes = {
	actions: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element
	])
}

const Style= {
	card: {
		width: 700,
		marginLeft: 10,
		marginTop: 5
	}
}