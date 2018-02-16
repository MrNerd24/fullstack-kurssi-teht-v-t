import axios from 'axios'

const baseUrl = '/api/blogs'

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const postNew = async (title, author, url, token) => {
	let blog = {
		title, author, url
	}

	const config = {
		headers: {'Authorization': 'bearer ' + token}
	}

	let request = await axios.post(baseUrl, blog, config)
	return request.data
}

const removeBlog = async (blog, token) => {

	const config = {
		headers: {'Authorization': 'bearer ' + token}
	}

	await axios.delete(baseUrl + "/" + blog.id, config)
}

const addLike = async (blog) => {
	blog = {...blog}
	let id = blog.id
	delete blog.id
	blog.user = blog.user.id
	blog.likes++

	let request = await axios.put(baseUrl + "/" + id, blog)
	return request.data
}

export default {getAll, postNew, addLike, removeBlog}