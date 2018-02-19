import React from 'react';


class App extends React.Component {

	handleNewAnecdote = (event) => {
		event.preventDefault()
		let content = event.target.content.value
		this.props.store.dispatch({type: 'NEW_ANECDOTE', content})
		event.target.content.value = ""
	}

	render() {
		const anecdotes = this.props.store.getState().sort((a,b) => b.votes-a.votes)
		return (
			<div>
				<h2>Anecdotes</h2>
				{anecdotes.map(anecdote=>
					<div key={anecdote.id}>
						<div>
							{anecdote.content}
						</div>
						<div>
							has {anecdote.votes}
							<button onClick={() => this.props.store.dispatch({type: 'INCREASE_VOTES', id: anecdote.id})}>vote</button>
						</div>
					</div>
				)}
				<h2>create new</h2>
				<form onSubmit={this.handleNewAnecdote}>
					<div><input name="content" /></div>
					<button type="submit">create</button>
				</form>
			</div>
		)
	}
}

export default App