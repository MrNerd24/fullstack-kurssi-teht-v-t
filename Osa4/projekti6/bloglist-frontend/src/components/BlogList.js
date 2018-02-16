import React, {Component} from 'react'
import Blog from "./Blog";

export default class BlogList extends Component {

	render() {
		return(
			this.props.blogs.map(blog =>
				<Blog
					onBlogDelete={this.props.onBlogDelete}
					onBlogLike={this.props.onBlogLike}
					key={blog._id} blog={blog}
					user={this.props.user}
				/>
			)
		)
	}

}