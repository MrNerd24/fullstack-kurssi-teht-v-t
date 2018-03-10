const blogRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')
const User = require('../models/user')

blogRouter.get('/', async (request, response) => {
	try {
		let blogs = await Blog.find({}).populate('user')
		response.json(blogs.map(Blog.format))
	} catch (e) {
		console.log(e)
		response.status(500).json({error: 'Something went wrong.'})
	}
})

blogRouter.post('/', async (request, response) => {
	const {title, author, url, likes} = request.body

	try {
		const token = request.token
		const decodedToken = jwt.verify(token, process.env.SECRET)

		if (!token || !decodedToken.id) {
			return response.status(401).json({error: 'token missing or invalid'})
		}

		if (title === undefined || url === undefined) {
			return response.status(400).json({error: 'url or title missing'})
		}

		const user = await User.findById(decodedToken.id)

		const blog = new Blog({title, author, url, likes: (likes || 0), user: user._id})

		const result = Blog.format((await blog.save()).populate("user"))

		user.blogs = user.blogs.concat(blog._id)
		await user.save()

		response.status(201).json(result)
	} catch (exception) {
		if (exception.name === 'JsonWebTokenError') {
			response.status(401).json({error: exception.message})
		} else {
			console.log(exception)
			response.status(500).json({error: 'something went wrong...'})
		}
	}
})

blogRouter.delete('/:id', async (request, response) => {
	const blog = await Blog.findById(request.params.id)

	try {
		const token = request.token
		const decodedToken = jwt.verify(token, process.env.SECRET)

		if (!token || !decodedToken.id) {
			return response.status(401).json({error: 'token missing or invalid'})
		}


		if (blog.user !== undefined && decodedToken.id.toString() !== blog.user.toString()) {
			return response.status(400).json({error: 'only creator can delete a blog'})
		}

		let user = await User.findById(decodedToken.id)
		user.set({blogs: user.blogs.filter((blogId) => blogId.toString() !== blog._id.toString() )})
		user.save()

		if (blog) {
			await blog.remove()
		}

		response.status(204).end()
	} catch (exception) {
		if (exception.name === 'JsonWebTokenError') {
			response.status(401).json({error: exception.message})
		} else {
			console.log(exception)
			response.status(500).json({error: 'something went wrong...'})
		}
	}
})

blogRouter.put('/:id', async (request, response) => {
	const {title, author, url, likes} = request.body
	const blog = await Blog.findByIdAndUpdate(request.params.id, {title, author, url, likes}, {new: true})

	response.status(200).json(Blog.format(blog.populate('user')))
})

blogRouter.post('/:id/comments', async (request, response) => {
	try{
		let comment = request.body.comment
		let id = request.params.id

		let blog = await Blog.findById(id).exec()
		if(!blog) {
			response.status(404).json({error: "Couldn't find a blog with provided id"})
			return
		}
		if(!blog.comments) {
			blog.comments = []
		}
		blog.comments.push(comment)
		let result = Blog.format((await blog.save()).populate("user"))
		response.status(200).json(result)
	} catch (e) {
		console.log(e)
		response.status(500).json({error: "Something went wrong..."})
	}


})

module.exports = blogRouter