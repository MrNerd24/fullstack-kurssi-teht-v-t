import React, {Component} from 'react'
import {Typography} from "material-ui";

export default class Text extends Component {

	render() {
		return (
			<Typography {...this.props} style={Style.text}>{this.props.children}</Typography>
		)
	}

}

const Style = {
	text: {
		marginBottom: 5,
		marginLeft: 5
	}
}