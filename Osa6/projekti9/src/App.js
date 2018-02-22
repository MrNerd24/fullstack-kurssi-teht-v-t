import React from 'react'
import Notification from './Components/Notification'
import AnecdoteForm from './Components/AnecdoteForm'
import AnecdoteList from './Components/AnecdoteList'

class App extends React.Component {

	render() {
		return (
			<div>
				<h1>Programming anecdotes</h1>
				<Notification />
				<AnecdoteList/>
				<AnecdoteForm/>
			</div>
		)
	}
}

export default App