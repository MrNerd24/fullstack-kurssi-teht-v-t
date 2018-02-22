import React from 'react'
import * as Actions from "../Actions";
import {notify} from "./Notification";
import Filter from "./Filter";
import {connect} from "react-redux";

class AnecdoteList extends React.Component {



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
							<button onClick={() => {
								this.props.voteAnecdote(anecdote.id)
								notify('You voted for "' + anecdote.content + '"')
							}
							}>
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
		voteAnecdote: (id) => {dispatch(Actions.voteAnecdote(id))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)