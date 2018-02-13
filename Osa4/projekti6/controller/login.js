const Router = require('express').Router()
const User = require('../models/user')
const Bcrypt = require('bcrypt')
const Jwt = require('jsonwebtoken')
const TOKEN_SECRET = require('../serverConfig').TOKEN_SECRET

Router.post('/', async (request, response) => {
	try {
		let user = request.body.username ? await User.findOne({username: request.body.username}).exec() : null
		let passwordCorrect = user && request.body.password ? await Bcrypt.compare(request.body.password, user.passwordHash) : false

		if (!(user && passwordCorrect)) {
			return response.status(400).json({error: 'invalid username or password'})
		}

		let userForToken = {
			username: user.username,
			id: user._id
		}

		let token = Jwt.sign(userForToken, TOKEN_SECRET)

		response.status(200).json({token, username: user.username, name: user.name})
	} catch (e) {
		console.log(e)
		response.status(500).json({error: 'Something went wrong.'})
	}
})

module.exports = Router