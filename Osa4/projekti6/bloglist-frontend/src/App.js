import React from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from "./components/LoginForm";
import Login from "./services/Login";

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			blogs: [],
			username: "",
			password: "",
			user: null
		}
	}

	componentWillMount() {
		Login.loginWithLocalstorage().then((user) => this.setState({user}))
		blogService.getAll().then(blogs =>
			this.setState({blogs})
		)
	}

	handleLogin = async (event) => {
		event.preventDefault()
		try{
			let user = await Login.login(this.state.username, this.state.password)
			this.setState({user, username: "", password: ""})
		} catch (e) {
			console.log(e)
		}

	}

	handleLogout = (event) => {
		event.preventDefault()
		this.setState({user: null})
	}

	renderLoginForm() {
		return (
			<LoginForm
				username={this.state.username}
				onUsernameChange={(event) => this.setState({username: event.target.value})}

				password={this.state.password}
				onPasswordChange={(event) => this.setState({password: event.target.value})}

				onSubmitClick={this.handleLogin}
			/>
		)
	}

	renderBlogs() {
		return (
			<div>
				<h2>blogs</h2>
				<p>{this.state.user.name} logged in.</p>
				<button onClick={this.handleLogout}>Logout</button>
				{this.state.blogs.map(blog =>
					<Blog key={blog._id} blog={blog}/>
				)}
			</div>
		);
	}

	render() {
		if(this.state.user) {
			return this.renderBlogs()
		} else {
			return this.renderLoginForm()
		}

	}



}

export default App;
