import React from 'react'
import Notification from './Components/Notification'
import AnecdoteForm from './Components/AnecdoteForm'
import AnecdoteList from './Components/AnecdoteList'
import {connect} from "react-redux";
import * as Actions from './Actions'

class App extends React.Component {

	async componentWillMount() {
		this.props.initAnecdotes()
	}

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

const mapDispatchToProps = (dispatch) => {
	return {
		initAnecdotes: (anecdotes) => dispatch(Actions.initAnecdotes(anecdotes))
	}
}

export default connect(null, mapDispatchToProps)(App)