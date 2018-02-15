import React, {Component} from 'react'

export default class Notification extends Component {

	constructor(props) {
		super(props)

		this.timeout = null
		this.state = {
			visible: false
		}
	}

	showMessage(time) {
		if(this.timeout) {
			clearTimeout(this.timeout)
		}
		this.setState({visible: true})
		this.timeout = setTimeout(() => {
			this.setState({visible: false})
		}, time)
	}

	render() {
		if(this.state.visible) {
			return(
				<div style={{...Style.div, borderColor: this.props.color, ...this.props.style}}>
					<h1 style={{...Style.h1, color: this.props.color, ...this.props.h1Style}}>{this.props.message}</h1>
				</div>
			)
		} else {
			return null
		}

	}

}

const Style = {
	div: {
		width: "80%",
		margin: "auto",
		borderStyle: "solid",
		borderWidth: 3,
	},
	h1: {
		margin: 'auto'
	}
}