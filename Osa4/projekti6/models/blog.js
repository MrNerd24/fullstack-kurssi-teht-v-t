let mongoose = require('../mongooseConfig')

const Blog = mongoose.model('Blog', {
	title: String,
	author: String,
	url: String,
	likes: Number
})

module.exports = Blog