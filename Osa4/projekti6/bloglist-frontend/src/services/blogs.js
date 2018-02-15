import axios from 'axios'

const baseUrl = '/api/blogs'

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const postNew = async (title, author, url, token) => {
	let blog = {
		title,author,url
	}

	const config = {
		headers: { 'Authorization': 'bearer ' + token }
	}

	let request = await axios.post(baseUrl, blog, config)
	return request.data
}

export default {getAll, postNew}