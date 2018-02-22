
export const voteAnecdote = (id) => {
	return {
		type: 'VOTE',
		id
	}
}

export const createAnecdote = (content) => {
	return {
		type: 'CREATE',
		content
	}
}