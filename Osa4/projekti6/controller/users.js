const Router = require('express').Router()
const User = require('../models/user')
const Bcrypt = require('bcrypt')

Router.post('/', async (request, response) => {
	try{

		if(!request.body.password || request.body.password.length <= 3) {
			return response.status(400).json({error: 'invalid password. It needs to be at least 3 characters long.'})
		}

		if(!request.body.username || (await User.find({username: request.body.username}).exec()).length > 0) {
			return response.status(400).json({error: 'invalid username. It needs to be unique.'})
		}

		let passwordHash = await Bcrypt.hash(request.body.password, 10)

		let user = User({
			username: request.body.username,
			name: request.body.name,
			passwordHash,
			adult: !!request.body.adult
		})

		let savedUser = await user.save()

		response.status(201).json(User.format(savedUser))
	} catch(e) {
		console.log(e)
		response.status(500).json({error: 'Something went wrong.'})
	}
})

Router.get('/', async (request, response) => {
	try {
		let users = await User.find({}).exec()
		response.status(200).json(users.map(User.format))
	}catch (e) {
		console.log(e)
		response.status(500).json({error: 'Something went wrong.'})
	}
})


module.exports = Router