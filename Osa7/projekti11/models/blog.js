const mongoose = require('mongoose')
const User = require('./user')

const blogSchema = new mongoose.Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	comments: [{type: String}]
})

blogSchema.statics.format = (blog) => {
	return {
		title: blog.title,
		author: blog.author,
		url: blog.url,
		likes: blog.likes,
		user: User.format(blog.user),
		id: blog._id,
		comments: blog.comments
	}
}

const Blog = mongoose.model('Blog', blogSchema )

module.exports = Blog