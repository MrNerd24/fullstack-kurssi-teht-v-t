import PropTypes from 'prop-types'

export const userShape = PropTypes.shape({
	username: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	adult: PropTypes.bool.isRequired,
	blogs: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]))
})

export const currentUserShape = PropTypes.shape({
	username: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
})

export const blogShape = PropTypes.shape({
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	user:  userShape,
	comments: PropTypes.arrayOf(PropTypes.string)
})

