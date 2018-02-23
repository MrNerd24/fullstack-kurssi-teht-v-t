import AnecdotesDao from "../Services/AnecdotesDao";

export const updateAnecdote = (anecdote) => {
	return async (dispatch) => {
		anecdote = await AnecdotesDao.updateAnecdote(anecdote)
		dispatch({
			type: 'UPDATE',
			anecdote
		})
	}

}

export const createAnecdote = (anecdote) => {
	return async (dispatch) => {
		let anecdoteFromServer = await AnecdotesDao.postAnecdote(anecdote)
		dispatch({
			type: 'CREATE',
			anecdote: anecdoteFromServer
		})
	}

}

export const initAnecdotes = () => {
	return async (dispatch) => {
		let anecdotes = await AnecdotesDao.getAnecdotes()
		dispatch({
			type: "INIT_ANECDOTES",
			anecdotes
		})
	}

}