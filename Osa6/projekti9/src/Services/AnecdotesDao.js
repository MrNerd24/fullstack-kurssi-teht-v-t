import Axios from 'axios'

export const getAnecdotes = async () => {
	let response = await Axios.get("http://localhost:3001/anecdotes")
	return response.data
}

export const postAnecdote = async (anecdote) => {
	let response = await Axios.post("http://localhost:3001/anecdotes", anecdote)
	return response.data
}

export const updateAnecdote = async (anecdote) => {
	let response = await Axios.put("http://localhost:3001/anecdotes/" + anecdote.id, anecdote)
	return response.data
}

export default {getAnecdotes, postAnecdote, updateAnecdote}