let initialState = []

export default (state = initialState, action) => {
	switch(action.type) {
		case 'INIT_BLOGS':
			return action.blogs
		case 'ADD_BLOG':
			return [...state, action.blog]
		case 'UPDATE_BLOG':
			return state.map((blog) => blog.id === action.blog.id ? action.blog : blog)
		case 'DELETE_BLOG':
			return state.filter((blog) => blog.id !== action.id)
		default:
			return state
	}
}