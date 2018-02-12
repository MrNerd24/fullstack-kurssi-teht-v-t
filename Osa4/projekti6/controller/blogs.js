const Router = require('express').Router()
const Blog = require('../models/blog')

let formatBlog = (blog) => {
	let newblog = {...blog._doc, id: blog._id}
	delete newblog._id
	delete newblog.__v
	return newblog
}

Router.get('/', async (request, response) => {
	try {
		let blogs = await Blog.find({})
		response.json(blogs.map(formatBlog))
	} catch (e) {
		response.status(400).json({error: e.toString()})
	}
})

Router.post('/', async (request, response) => {
	try{
		if(!request.body.title || !request.body.url) {
			return response.status(400).json({error: 'missing title or url'})
		}

		if(!request.body.likes) {
			request.body.likes = 0;
		}
		const blog = new Blog(request.body)

		let result = await blog.save()
		response.status(201).json(formatBlog(result))
	}catch(e) {
		response.status(500).json({error: e.toString()})
	}
})

Router.delete('/', async (request, response) => {
	try {
		await Blog.remove({})
		response.status(204).end()
	} catch (e) {
		response.status(404).json({error: 'not found'})
	}

})

Router.delete('/:id', async (request, response) => {
	try {
		await Blog.findByIdAndRemove(request.params.id)
		response.status(204).end()
	} catch (e) {
		response.status(404).json({error: 'not found'})
	}
})

Router.put('/:id', async (request,response) => {
	try {
		let newBlog = await Blog.findByIdAndUpdate(request.params.id, request.body).exec()
		response.status(200).json(formatBlog(newBlog))
	} catch (e) {
		response.status(404).json({error: 'not found'})
	}
})

module.exports = Router