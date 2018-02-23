const getId = () => (100000*Math.random()).toFixed(0)

const initialState = []

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'UPDATE':
			return state.map((anecdote) => anecdote.id === action.anecdote.id ? action.anecdote : anecdote)
		case 'CREATE':
			return [...state, action.anecdote]
		case 'INIT_ANECDOTES':
			return action.anecdotes
		default:
			return state
	}
}

export default reducer