import React from 'react'
import Notification from './Components/Notification'
import AnecdoteForm from './Components/AnecdoteForm'
import AnecdoteList from './Components/AnecdoteList'

class App extends React.Component {

	render() {
		const anecdotes = this.props.store.getState()
		return (
			<div>
				<h1>Programming anecdotes</h1>
				<Notification store={this.props.store} />
				<AnecdoteList store={this.props.store} />
				<AnecdoteForm store={this.props.store} />
			</div>
		)
	}
}

export default App