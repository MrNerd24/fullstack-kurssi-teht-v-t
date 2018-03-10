import React, {Component} from 'react'
import {connect} from "react-redux";
import NotificationComponent from "../components/NotificationComponent";

export class Notification extends Component {

	render() {
		return(
			<NotificationComponent message={this.props.message} type={this.props.type}/>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		message: state.notification.message,
		type: state.notification.type
	}
}

export default connect(mapStateToProps)(Notification)