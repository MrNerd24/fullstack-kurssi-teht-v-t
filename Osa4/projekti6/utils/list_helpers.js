const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	return blogs.reduce((sum, val) => sum+val.likes, 0)
}

const favoriteBlog = (blogs) => {
	let index = maxIndex(blogs, (blog) => blog.likes);
	if(index >= 0) {
		return blogs[index]
	} else {
		return null;
	}

}

const maxIndex = (list, value) => {
	if(list.length === 0) {
		return -1;
	}
	let maxValue = value(list[0])
	let maxIndex = 0

	list.forEach((item, index) => {
		let itemValue = value(item)
		if(itemValue > maxValue) {
			maxValue = itemValue
			maxIndex = index
		}
	})

	return maxIndex
}

module.exports = {
	dummy, totalLikes, favoriteBlog
}