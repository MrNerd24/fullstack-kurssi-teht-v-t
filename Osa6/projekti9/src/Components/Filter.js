import React, {Component} from 'react'
import * as Actions from "../Actions";
import {connect} from "react-redux";

export class Filter extends Component {

	handleChange = (event) => {
		this.props.setFilter(event.target.value)
	}

	render() {
		return(
			<div style={{marginBottom: 10}}>
				Filter: <input type="text" onChange={this.handleChange}/>
			</div>
		)
	}


}

const mapDispatchToProps = (dispatch) => {
	return {
		setFilter: (filter) => {dispatch(Actions.setFilter(filter))}
	}
}

export default connect(null, mapDispatchToProps)(Filter)