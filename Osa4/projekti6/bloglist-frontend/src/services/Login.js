import Axios from 'axios'
const baseUrl = '/api/login'

const login = async (username, password) => {
	let user = {
		username, password
	}
	const request = await Axios.post(baseUrl, user)
	saveLoginInfo(username,password)
	return request.data
}

const saveLoginInfo = async (username, password) => {
	window.localStorage.setItem("username", username)
	window.localStorage.setItem("password", password)
}

const loginWithLocalstorage = async () => {
	let username = window.localStorage.getItem("username")
	let password = window.localStorage.getItem("password")
	return await login(username, password)
}
export default { login, saveLoginInfo, loginWithLocalstorage}