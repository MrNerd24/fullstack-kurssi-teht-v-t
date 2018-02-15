import React, {Component} from 'react'
import TextField from "./TextField";
import PropTypes from 'prop-types'

export default class BlogForm extends Component {

	render() {
		return(
			<div>
				<h1>Create a blog</h1>
				<form onSubmit={this.props.onSubmitClick}>
					<TextField label="Title" value={this.props.title} onChange={this.props.onTitleChange}/>
					<TextField label="Author" value={this.props.author} onChange={this.props.onAuthorChange}/>
					<TextField label="Url" value={this.props.url} onChange={this.props.onUrlChange}/>
					<input type="submit" value="Add"/>
				</form>
			</div>
		)
	}

}

BlogForm.propTypes = {
	onSubmitClick: PropTypes.func.isRequired,

	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,

	onTitleChange: PropTypes.func.isRequired,
	onAuthorChange: PropTypes.func.isRequired,
	onUrlChange: PropTypes.func.isRequired
}