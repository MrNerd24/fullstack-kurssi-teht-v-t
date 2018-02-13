const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogsRouter = require('./controller/blogs')
const userRouter = require('./controller/users')
const loginRouter = require('./controller/login')
const serverConfig = require('./serverConfig')

app.use(function (req, res, next) {
	let start = 'bearer '
	let token = req.get('Authorization')
	req.token = token && token.toLowerCase().startsWith(start) ? token.substring(start.length) : null
	next()
})

app.use(cors())
app.use(bodyParser.json())
app.use('/api/users', userRouter)
app.use('/api/blogs', blogsRouter)
app.use('/api/login', loginRouter)

let server = http.createServer(app)

let PORT = serverConfig.PORT
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})

server.on('close', () => {
	require('./mongooseConfig').connection.close()
})

module.exports = {app, server}