import React, {Component} from 'react'
import BlogListComponent from "../components/BlogListComponent";
import {connect} from "react-redux";

export class BlogList extends Component {

	handleLikeClick = (blog) => {

	}

	handleRemoveClick = (blog) => {

	}

	render() {
		return(
			<BlogListComponent
				blogs={this.props.blogs}

				onLikeClick={this.handleLikeClick}
				onRemoveClick={this.handleRemoveClick}
			/>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		blogs: state.blogs
	}
}

export default connect(mapStateToProps)(BlogList)