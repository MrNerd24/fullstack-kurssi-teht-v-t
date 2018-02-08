const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	return blogs.reduce((sum, val) => sum+val.likes, 0)
}

module.exports = {
	dummy, totalLikes
}