import React, {Component} from 'react'
import Container from "./Container";
import Text from "./Text";
import {List} from "material-ui";
import BlogLink from "./BlogLink";
import {blogShape, userShape} from "../CommonPropTypes";
import PropTypes from 'prop-types'


export default class UserComponent extends Component {

	render() {
		return(
			<Container>
				<Text variant="headline">{this.props.user.name}</Text>
				<Text variant="subheading">Added blogs</Text>
				<List>
					{this.props.blogs.map((blog) => <BlogLink key={blog.title} blog={blog}/>)}
				</List>
			</Container>
		)
	}

}

UserComponent.propTypes = {
	user: userShape.isRequired,
	blogs: PropTypes.arrayOf(blogShape).isRequired,
}