let mongoose = require('../mongooseConfig')
let Schema = mongoose.Schema

let userSchema = new Schema({
	username: String,
	name: String,
	passwordHash: String,
	adult: Boolean,
	blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }]
});

userSchema.statics.format = (user) => {
	if(user.username) {
		return {
			username: user.username,
			name: user.name,
			adult: user.adult,
			blogs: user.blogs,
			id: user._id
		}
	} else {
		return user.toString()
	}

}

const User = mongoose.model('User', userSchema)



module.exports = User