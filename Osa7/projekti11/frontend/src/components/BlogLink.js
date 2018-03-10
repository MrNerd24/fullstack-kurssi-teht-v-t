import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {ListItem} from "material-ui";
import Text from "./Text";
import {blogShape} from "../CommonPropTypes";

export default class BlogLink extends Component {

	render() {
		return(
			<ListItem>
				<Text><Link to={`/blogs/${this.props.blog.id}`}>{this.props.blog.title}</Link></Text>
			</ListItem>
		)
	}

}

BlogLink.propTypes = {
	blog: blogShape.isRequired
}