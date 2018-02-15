import React, {Component} from 'react'
import Blog from "./Blog";

export default class BlogList extends Component {

	render() {
		return(
			this.props.blogs.map(blog =>
				<Blog key={blog._id} blog={blog}/>
			)
		)
	}

}