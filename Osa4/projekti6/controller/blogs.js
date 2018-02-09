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
		response.status(201).json(result)
	}catch(e) {
		response.status(500).json({error: e.toString()})
	}
})

Router.delete('/', async (request, response) => {
	try {
		await blog.remove({})
		response.status(204).end()
	} catch (e) {
		response.status(400).send({error: 'malformatted id'})
	}

})

Router.delete('/:id', async (request, response) => {
	try {
		await blog.findByIdAndRemove(request.params.id)
		response.status(204).end()
	} catch (e) {
		response.status(400).send({error: 'malformatted id'})
	}
})

module.exports = Router