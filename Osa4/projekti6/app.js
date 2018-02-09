const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogsRouter = require('./controller/blogs')
const serverConfig = require('./serverConfig')



app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogsRouter)

let server = http.createServer(app)

let PORT = serverConfig.PORT
server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})

server.on('close', () => {
	require('./mongooseConfig').connection.close()
})

module.exports = {app, server}