import React from 'react'
import {Route, BrowserRouter as Router, Link} from "react-router-dom";

class Menu extends React.Component {
	render() {
		return (
			<div style={this.Style.div}>
				<Link style={this.Style.link} to="/">anecdotes</Link>
				<Link style={this.Style.link} to="/create">create new</Link>
				<Link style={this.Style.link} to="/about">about</Link>
			</div>
		)
	}

	Style = {
		div: {
			display: "flex",
			flexDirection: "row",
			backgroundColor: "rgb(15,155,253)",
			height: 50,
			width: "auto"
		},
		link: {
			alignSelf: "center",
			fontSize: 20,
			color: "black",
			marginLeft: 5,
			height: 42,
			verticalAlign: "middle",
			lineHeight: "42px",
			textDecoration: "none",
			borderColor: "black",
			borderStyle: "solid",
			borderWidth: 2,
			borderRadius: 2,
			padding: 2,
		}
	}
}



const AnecdoteList = ({anecdotes}) => (
	<div>
		<h2>Anecdotes</h2>
		<ul>
			{anecdotes.map(anecdote => <li key={anecdote.id}><Link
				to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link></li>)}
		</ul>
	</div>
)

const About = () => (
	<div>
		<h2>About anecdote app</h2>
		<p>According to Wikipedia:</p>

		<em>An anecdote is a brief, revealing account of an individual person or an incident.
			Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke
			laughter but to reveal a truth more general than the brief tale itself,
			such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea
			about a person, place, or thing through the concrete details of a short narrative.
			An anecdote is "a story with a point."</em>

		<p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
	</div>
)

const Footer = () => (
	<div>
		Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.

		See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for
		the source code.
	</div>
)

class CreateNew extends React.Component {
	constructor() {
		super()
		this.state = {
			content: '',
			author: '',
			info: ''
		}
	}

	handleChange = (e) => {
		console.log(e.target.name, e.target.value)
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addNew({
			content: this.state.content,
			author: this.state.author,
			info: this.state.info,
			votes: 0
		})
	}

	render() {
		return (
			<div>
				<h2>create a new anecdote</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						content
						<input name='content' value={this.state.content} onChange={this.handleChange}/>
					</div>
					<div>
						author
						<input name='author' value={this.state.author} onChange={this.handleChange}/>
					</div>
					<div>
						url for more info
						<input name='info' value={this.state.info} onChange={this.handleChange}/>
					</div>
					<button>create</button>
				</form>
			</div>
		)

	}
}

class Anecdote extends React.Component {

	render() {
		return (
			<div>
				<h2>{this.props.anecdote.content}</h2>
				<p>Has {this.props.anecdote.votes} votes.</p>
				<p>For more info see <a href={this.props.anecdote.info}>{this.props.anecdote.info}</a></p>
			</div>
		)
	}

}

class Notification extends React.Component {


	render() {
		if (this.props.notification) {
			return (
				<div style={this.Style.div}>
					<p style={this.Style.p}>{this.props.notification}</p>
				</div>
			)
		}
		return null
	}

	Style = {
		div: {
			borderColor: "rgb(25,245,20)",
			borderWidth: 2,
			borderStyle: "solid",
			padding: 5,
			margin: 3,
			width: 700,
			borderRadius: 5,
		},
		p: {
			color: "rgb(25,245,20)",
			fontSize: 20
		}
	}
}


class App extends React.Component {
	constructor() {
		super()

		this.state = {
			anecdotes: [
				{
					content: 'If it hurts, do it more often',
					author: 'Jez Humble',
					info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
					votes: 0,
					id: '1'
				},
				{
					content: 'Premature optimization is the root of all evil',
					author: 'Donald Knuth',
					info: 'http://wiki.c2.com/?PrematureOptimization',
					votes: 0,
					id: '2'
				}
			],
			notification: ''
		}
	}

	addNew = (anecdote, history) => {
		anecdote.id = (Math.random() * 10000).toFixed(0)
		this.setState({anecdotes: this.state.anecdotes.concat(anecdote)})
		this.notify("A new anecdote " + anecdote.content + " created!")
		history.push("/")
	}

	anecdoteById = (id) =>
		this.state.anecdotes.find(a => a.id === id)

	vote = (id) => {
		const anecdote = this.anecdoteById(id)

		const voted = {
			...anecdote,
			votes: anecdote.votes + 1
		}

		const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

		this.setState({anecdotes})
	}

	timeout = null
	notify = (message) => {
		if (this.timeout) {
			clearTimeout(this.timeout)
		}
		this.setState({notification: message})
		this.timeout = setTimeout(() => {
			this.setState({notification: ""})
		}, 10000)
	}

	render() {
		return (
			<Router>
				<div>
					<h1>Software anecdotes</h1>
					<Menu/>
					<Notification notification={this.state.notification}/>
					<Route exact path="/" render={() => <AnecdoteList anecdotes={this.state.anecdotes}/>}/>
					<Route exact path="/create"
						   render={({history}) => <CreateNew addNew={(anecdote) => this.addNew(anecdote, history)}/>}/>
					<Route exact path="/about" render={() => <About/>}/>
					<Route exact path="/anecdotes/:id"
						   render={({match}) => <Anecdote anecdote={this.anecdoteById(match.params.id)}/>}/>
					<Footer/>
				</div>
			</Router>
		);
	}
}

export default App;