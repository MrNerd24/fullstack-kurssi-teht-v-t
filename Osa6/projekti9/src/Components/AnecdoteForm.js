import React from 'react'
import * as Actions from '../Actions'
import {connect} from "react-redux";

class AnecdoteForm extends React.Component {


	handleSubmit = (e) => {
		e.preventDefault()
		const content = e.target.anecdote.value
		e.target.anecdote.value = ''
		try{
			this.props.createAnecdote({content, votes:0})
			this.props.notify('You created anecdote "' + content + '"')
		} catch (e) {
			this.props.notify("Failed to add a new anecdote.")
		}
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
		createAnecdote: (content) => {dispatch(Actions.createAnecdote(content))},
		notify: (message) => {dispatch(Actions.setNotification(message))}
	}

}

export default connect(null, mapDispatchToProps)(AnecdoteForm)