const mongoose = require('mongoose')
const DBURI = require('./serverConfig').DBURI


mongoose.connect(DBURI)
mongoose.Promise = global.Promise

module.exports = mongoose