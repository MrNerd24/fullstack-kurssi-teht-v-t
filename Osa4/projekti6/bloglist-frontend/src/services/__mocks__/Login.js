

const login = async (username, password) => {
	if(username==="Testi" && password==="1234") {
		let user = {
			username,
			password,
			token: "8657664nhthry54hr3j644wby4ht53"
		}
		saveLoginInfo(user.username,user.password)
		return user
	} else {
		return null
	}

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