const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogsRouter = require('./controller/blogs')

app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogsRouter)


const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})