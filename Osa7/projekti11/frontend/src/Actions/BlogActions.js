import BlogsService from '../services/blogs'

export const initBlogs = () => {
	return async (dispatch) => {
		let blogs = await BlogsService.getAll()
		dispatch({
			type: "INIT_BLOGS",
			blogs
		})
	}
}

export const addBlog = (blog) => {
	return async (dispatch) => {
		let savedBlog = await BlogsService.create(blog)
		dispatch({
			type: "ADD_BLOG",
			blog: savedBlog
		})
	}
}

export const deleteBlog = (id) => {
	return async (dispatch) => {
		BlogsService.remove(id)
		dispatch({
			type: "DELETE_BLOG",
			id
		})
	}
}

export const updateBlog = (blog) => {
	return async (dispatch) => {
		let updatedBlog = await BlogsService.update(blog.id, blog)
		dispatch({
			type: "UPDATE_BLOG",
			blog: updatedBlog
		})
	}
}

export const addComment = (comment, id) => {
	return async (dispatch) => {
		let blog = await BlogsService.postComment(comment, id)
		dispatch({
			type: "UPDATE_BLOG",
			blog
		})
	}
}