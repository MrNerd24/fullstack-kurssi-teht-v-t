import React from 'react'
import * as Actions from "../Actions";
import {notify} from "./Notification";
import Filter from "./Filter";

class AnecdoteList extends React.Component {

	getShownAnecdotes(anecdotes) {
		let filteredAnecdotes = anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(this.props.store.getState().filter.toLowerCase()));
		return filteredAnecdotes.sort((a, b) => b.votes - a.votes);
	}

	render() {
		const anecdotes = this.props.store.getState().anecdotes
		return (
			<div>
				<h2>Anecdotes</h2>
				<Filter store={this.props.store}/>
				{this.getShownAnecdotes(anecdotes).map(anecdote =>
					<div key={anecdote.id}>
						<div>
							{anecdote.content}
						</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => {
								this.props.store.dispatch(Actions.voteAnecdote(anecdote.id))
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

export default AnecdoteList