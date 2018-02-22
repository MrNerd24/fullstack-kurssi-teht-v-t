import React from 'react'
import * as Actions from '../Actions'
import {notify} from "./Notification";
import {connect} from "react-redux";

class AnecdoteForm extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault()
		const content = e.target.anecdote.value
		this.props.createAnecdote(content)
		notify('You created anecdote "' + content + '"')

		e.target.anecdote.value = ''
	}
	render() {
		return (
			<div>
				<h2>create new</h2>
				<form onSubmit={this.handleSubmit}>
					<div><input name='anecdote'/></div>
					<button>create</button>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createAnecdote: (content) => {dispatch(Actions.createAnecdote(content))}
	}

}

export default connect(null, mapDispatchToProps)(AnecdoteForm)