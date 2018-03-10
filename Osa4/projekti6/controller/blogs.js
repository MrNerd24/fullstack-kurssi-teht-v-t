const Router = require('express').Router()
const Blog = require('../models/blog')
const Jwt = require('jsonwebtoken')
const TOKEN_SECRET = require('../serverConfig').TOKEN_SECRET
const User = require('../models/user')


Router.get('/', async (request, response) => {
	try {
		let blogs = await Blog.find({}).populate('user')
		response.json(blogs.map(Blog.format))
	} catch (e) {
		console.log(e)
		response.status(500).json({error: 'Something went wrong.'})
	}
})

Router.post('/', async (request, response) => {
	try{
		let body = request.body;
		if(!body.title || !body.url) {
			return response.status(400).json({error: 'Missing title or url.'})
		}

		let decodedToken = Jwt.verify(request.token, TOKEN_SECRET)
		if(!request.token || !decodedToken.id) {
			return response.status(401).json({ error: 'Token missing or invalid.' })
		}

		if(!body.likes) {
			body.likes = 0;
		}

		let user = await User.findById(decodedToken.id).exec()
		body = {...body, user: user._id.toString()}

		let blog = new Blog(body)

		let savedBlog = await blog.save()

		user.blogs = [...user.blogs, savedBlog._id]
		await user.save()

		response.status(201).json(Blog.format(savedBlog))
	}catch(e) {
		console.log(e)
		response.status(500).json({error: 'Something went wrong.'})
	}
})

Router.put('/:id', async (request, response) => {
	try{
		let body = request.body;
		if(!body.title || !body.url) {
			return response.status(400).json({error: 'Missing title or url.'})
		}

		if(!body.likes) {
			body.likes = 0;
		}

		let updatedBlog = await Blog.findByIdAndUpdate(request.params.id, body)
		response.status(200).json(Blog.format(updatedBlog))
	} catch (e) {
		console.log(e)
		response.status(500).json({error: 'Something went wrong.'})
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

		let decodedToken = Jwt.verify(request.token, TOKEN_SECRET)
		if(!request.token || !decodedToken.id) {
			return response.status(401).json({ error: 'Token missing or invalid.' })
		}

		let blog = await Blog.findById(request.params.id).exec()

		if(blog.user && blog.user.toString() !== decodedToken.id.toString()) {
			return response.status(401).json({error: "You can only remove your own blogs."})
		}

		await blog.remove()
		response.status(204).end()
	} catch (e) {
		console.log(e)
		response.status(404).json({error: 'not found'})
	}
})

Router.put('/:id', async (request,response) => {
	try {
		let newBlog = await Blog.findByIdAndUpdate(request.params.id, request.body).exec()
		response.status(200).json(Blog.format(newBlog))
	} catch (e) {
		response.status(404).json({error: 'not found'})
	}
})

module.exports = Router