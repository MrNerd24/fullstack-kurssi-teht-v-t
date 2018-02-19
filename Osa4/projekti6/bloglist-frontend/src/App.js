import React from 'react'
import blogService from './services/blogs'
import LoginForm from "./components/LoginForm";
import Login from "./services/Login";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";

class App extends React.Component {

	constructor(props) {
		super(props)

		this.notification = null
		this.state = {
			blogs: [],
			username: "",
			password: "",
			user: null,
			title: "",
			author: "",
			url: "",
			notification: "",
			color: "green"
		}
	}

	componentWillMount() {
		Login.loginWithLocalstorage().then((user) => this.setState({user}))
		this.updateBlogs()
	}

	updateBlogs = async () => {
		let blogs = await blogService.getAll()
		this.setState({blogs})
	}

	handleLogin = async (event) => {
		event.preventDefault()
		try{
			let user = await Login.login(this.state.username, this.state.password)
			this.setState({user, username: "", password: "", notification: "Logged in", color: "green"})
			this.notification.showMessage(3000)
		} catch (e) {
			this.setState({notification: e.response.data.error, color: "red"})
			this.notification.showMessage(3000)
		}

	}

	handleLogout = (event) => {
		event.preventDefault()
		this.setState({user: null, notification: "Logged out", color: "green"})
		this.notification.showMessage(3000)
		Login.saveLoginInfo("", "")
	}

	handleAddBlogClick = async (event) => {
		event.preventDefault()
		try{
			await blogService.postNew(this.state.title, this.state.author, this.state.url, this.state.user.token)
			this.setState({blogs: await blogService.getAll(), notification: "A new blog '" + this.state.title + "' by " + this.state.author + " added.", color: "green"})
			this.notification.showMessage(3000)
		}catch (e) {
			this.setState({notification: e.response.data.error, color: "red"})
			this.notification.showMessage(3000)
		}

	}

	handleBlogLike = async (blog) => {
		await blogService.addLike(blog)
		this.updateBlogs()
	}

	handleBlogDelete = async (blog) => {
		try{
			if(window.confirm("Delete " + blog.title + " by " + blog.author + "?")) {
				await blogService.removeBlog(blog, this.state.user.token)
				this.updateBlogs()
			}
		} catch (e) {
			this.setState({notification: e.response.data.error, color: "red"})
			this.notification.showMessage(3000)
		}

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
				<h1>Blogs</h1>
				<p>{this.state.user.name} logged in.</p>
				<button onClick={this.handleLogout}>Logout</button>
				<BlogList user={this.state.user} onBlogDelete={this.handleBlogDelete} onBlogLike={this.handleBlogLike} blogs={this.state.blogs.sort((a,b) => b.likes-a.likes)}/>
			</div>
		);
	}

	renderCreateBlog() {
		return(
			<Togglable buttonLabel="Add blog">
				<BlogForm
					onSubmitClick={this.handleAddBlogClick}
					title={this.state.title}
					author={this.state.author}
					url={this.state.url}
					onTitleChange={(event) => this.setState({title: event.target.value})}
					onAuthorChange={(event) => this.setState({author: event.target.value})}
					onUrlChange={(event) => this.setState({url: event.target.value})}
				/>
			</Togglable>
		)
	}

	render() {
		return (
			<div>
				<Notification
					ref={(ref) => this.notification = ref}
					message={this.state.notification}
					color={this.state.color}

				/>
				{this.state.user ? [this.renderCreateBlog(), this.renderBlogs()] :this.renderLoginForm()}
			</div>

		)

	}

}

export default App;
