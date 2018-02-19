import React from 'react'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Blog from '../../components/Blog'

describe("<Blog />", () => {

	let blog = null;
	let likeFunc = jest.fn()
	let deleteFunc = jest.fn()

	beforeEach(() => {
		blog = shallow(
			<Blog
				blog={{
					title: "Hieno blogi",
					author: "Minä",
					url: "ei ole",
					likes: 50,
					user: {
						username: "Minä",
						name: "Minä"
					}
				}}
				user = {{
					username: "Minä",
					name: "Minä"
				}}
				onBlogLike={likeFunc}
				onBlogDelete={deleteFunc}
			/>
		)
	})

	it("Shows only name and author, and after clicking, more info", () => {
		expect(blog.html()).toEqual(expect.stringContaining("Hieno blogi"))
		expect(blog.html()).toEqual(expect.stringContaining("Minä"))
		expect(blog.html()).not.toEqual(expect.stringContaining("ei ole"))
		expect(blog.html()).not.toEqual(expect.stringContaining("50"))

		blog.first().simulate("click")

		expect(blog.html()).toEqual(expect.stringContaining("Hieno blogi"))
		expect(blog.html()).toEqual(expect.stringContaining("Minä"))
		expect(blog.html()).toEqual(expect.stringContaining("ei ole"))
		expect(blog.html()).toEqual(expect.stringContaining("50"))
	})

})