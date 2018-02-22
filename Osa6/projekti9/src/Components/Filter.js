import React, {Component} from 'react'
import * as Actions from "../Actions";

export default class Filter extends Component {

	handleChange = (event) => {
		this.props.store.dispatch(Actions.setFilter(event.target.value))
	}

	render() {
		return(
			<div style={{marginBottom: 10}}>
				Filter: <input type="text" onChange={this.handleChange}/>
			</div>
		)
	}


}