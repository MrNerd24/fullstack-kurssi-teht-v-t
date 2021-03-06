if ( process.env.NODE_ENV !== 'production' ) {
	require('dotenv').config()
}


let PORT
if(process.env.NODE_ENV !== 'test') {
	PORT = process.env.PORT
} else {
	POT = process.env.TEST_PORT
}

let DBURI
if(process.env.NODE_ENV !== 'test') {
	DBURI = process.env.MONGODB_URI
} else {
	DBURI = process.env.TEST_MONGODB_URI
}

let TOKEN_SECRET = process.env.TOKEN_SECRET

module.exports = {PORT, DBURI, TOKEN_SECRET}


