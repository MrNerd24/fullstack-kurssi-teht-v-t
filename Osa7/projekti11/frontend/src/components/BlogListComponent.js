import React, {Component} from 'react'
import {List} from "material-ui";
import BlogLink from "./BlogLink";
import Container from "./Container";
import Text from "./Text";
import {blogShape} from "../CommonPropTypes";
import PropTypes from 'prop-types'

export default class BlogListComponent extends Component {

	render() {
		return(
			<Container>
				<Text variant="headline">Blogs</Text>
				<List>
					{this.props.blogs.map((blog) =>
						<BlogLink key={blog.id} blog={blog}/>
					)}
				</List>

			</Container>

		)
	}

}

BlogListComponent.propTypes = {
	blogs: PropTypes.arrayOf(blogShape).isRequired
}