import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, TextField} from "material-ui";
import Container from "./Container";
import Text from "./Text";

export default class BlogFormComponent extends Component {
	render() {
		return (
			<Container actions={(<Button color="primary" variant="raised" style={{marginTop: 5}} onClick={this.props.onSubmitClick}>Create</Button>)}>
				<Text variant="headline">Create a new blog</Text>

				<form>
					<div>
						<TextField
							label="Title"
							value={this.props.title}
							onChange={this.props.onTitleChange}
						/>
					</div>
					<div>
						<TextField
							label="Author"
							value={this.props.author}
							onChange={this.props.onAuthorChange}
						/>
					</div>
					<div>
						<TextField
							label="URL"
							value={this.props.url}
							onChange={this.props.onUrlChange}
						/>
					</div>


				</form>
			</Container>
		)
	}

}

BlogFormComponent.propTypes = {
	onSubmitClick: PropTypes.func.isRequired,

	onTitleChange: PropTypes.func.isRequired,
	onAuthorChange: PropTypes.func.isRequired,
	onUrlChange: PropTypes.func.isRequired,

	author: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
}
