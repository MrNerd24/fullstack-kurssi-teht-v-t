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

const mostBlogs = (blogs) => {
	let writers = writerStats(blogs)
	let index = maxIndex(writers, (item) => item.blogs)
	if(index < 0) {
		return null
	}
	return writers[index]
}

const mostLikes = (blogs) => {
	let writers = writerStats(blogs)
	let index = maxIndex(writers, (item) => item.likes)
	if(index < 0) {
		return null
	}
	return writers[index]
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

const writerStats = (blogs) => {
	let indices = new Map()
	let writers = []
	blogs.forEach((value) => {
		if(indices.has(value.author)) {
			let stats = writers[indices.get(value.author)]
			stats.likes += value.likes
			stats.blogs++
		} else {
			let index = writers.length
			writers.push({author: value.author, likes: value.likes, blogs: 1})
			indices.set(value.author, index)
		}
	})
	return writers
}

module.exports = {
	dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}