import React, {Component} from 'react'
import {Button, List, TextField} from "material-ui";
import Container from "./Container";
import Text from "./Text";
import {blogShape} from "../CommonPropTypes";
import PropTypes from 'prop-types'

class Blog extends Component {

	render() {
		const adder = this.props.blog.user ? this.props.blog.user.name : 'anonymous'
		const actions = [
			<Button key="comment" color="primary" onClick={this.props.onCommentSubmit}>Comment</Button>,
			<Button key="like" color="primary" onClick={this.props.onLikeClick}>like</Button>,
			this.props.deletable && <div key="delete">
				<Button  onClick={this.props.onDeleteClick}>delete</Button>
			</div>
		]

		return (
			<Container actions={actions}>
				<Text variant="headline">{this.props.blog.title}</Text>
				<Text variant="subheading">By {this.props.blog.author}</Text>
				<Text>
					<a href={this.props.blog.url}>{this.props.blog.url}</a>
				</Text>
				<Text>
					{this.props.blog.likes} likes
				</Text>
				<Text>added by {adder}</Text>
				<Text variant="subheading">Comments:</Text>
				<List>
					{this.props.blog.comments && this.props.blog.comments.map((comment) => <Text key={comment}>{comment}</Text>)}
				</List>
				<TextField
					label="New comment"
					value={this.props.comment}
					onChange={this.props.onCommentChange}
				/>
			</Container>
		)
	}
}

Blog.propTypes = {
	blog: blogShape.isRequired,
	comment: PropTypes.string.isRequired,
	onCommentChange: PropTypes.func.isRequired
}

export default Blog

