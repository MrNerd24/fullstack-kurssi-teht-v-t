let mongoose = require('../mongooseConfig')
let User = require('./user')
let Schema = mongoose.Schema

let blogSchema = new Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
	user: { type: Schema.Types.ObjectId, ref: 'User' }
});

blogSchema.statics.format = (blog) => {
	return {
		title: blog.title,
		author: blog.author,
		url: blog.url,
		likes: blog.likes,
		user: User.format(blog.user),
		id: blog._id
	}
}

const Blog = mongoose.model('Blog', blogSchema)



module.exports = Blog