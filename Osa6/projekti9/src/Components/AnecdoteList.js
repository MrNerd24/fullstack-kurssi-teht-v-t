import React from 'react'
import * as Actions from "../Actions";
import Filter from "./Filter";
import {connect} from "react-redux";

class AnecdoteList extends React.Component {

	handleVote = async (anecdote) => {
		try{
			anecdote.votes++
			this.props.updateAnecdote(anecdote)
			this.props.notify('You voted for "' + anecdote.content + '"')
		} catch (e) {
			this.props.notify("Something went wrong when trying to add a vote.")
		}

	}

	render() {
		return (
			<div>
				<h2>Anecdotes</h2>
				<Filter/>
				{this.props.anecdotes.map(anecdote =>
					<div key={anecdote.id}>
						<div>
							{anecdote.content}
						</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => this.handleVote(anecdote)}>
								vote
							</button>
						</div>
					</div>
				)}
			</div>
		)
	}


}

const getShownAnecdotes = (anecdotes, filter) => {
	let filteredAnecdotes = anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()));
	return filteredAnecdotes.sort((a, b) => b.votes - a.votes);
}

const mapStateToProps = (state) => {
	return {
		anecdotes: getShownAnecdotes(state.anecdotes, state.filter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateAnecdote: (anecdote) => {dispatch(Actions.updateAnecdote(anecdote))},
		notify: (message) => {dispatch(Actions.setNotification(message))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)