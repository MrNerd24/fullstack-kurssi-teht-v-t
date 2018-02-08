const mongoose = require('mongoose')

if ( process.env.NODE_ENV !== 'production' ) {
	require('dotenv').config()
}

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl)
mongoose.Promise = global.Promise

module.exports = mongoose