const listHelper = require('../utils/list_helpers')

const listWithOneBlog = [
	{
		_id: '5a422aa71b54a676234d17f8',
		title: 'Go To Statement Considered Harmful',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
		likes: 5,
		__v: 0
	}
]

const blogs = [
	{
		_id: "5a422a851b54a676234d17f7",
		title: "React patterns",
		author: "Michael Chan",
		url: "https://reactpatterns.com/",
		likes: 7,
		__v: 0
	},
	{
		_id: "5a422aa71b54a676234d17f8",
		title: "Go To Statement Considered Harmful",
		author: "Edsger W. Dijkstra",
		url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
		likes: 5,
		__v: 0
	},
	{
		_id: "5a422b3a1b54a676234d17f9",
		title: "Canonical string reduction",
		author: "Edsger W. Dijkstra",
		url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
		likes: 12,
		__v: 0
	},
	{
		_id: "5a422b891b54a676234d17fa",
		title: "First class tests",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
		likes: 10,
		__v: 0
	},
	{
		_id: "5a422ba71b54a676234d17fb",
		title: "TDD harms architecture",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
		likes: 0,
		__v: 0
	},
	{
		_id: "5a422bc61b54a676234d17fc",
		title: "Type wars",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
		likes: 2,
		__v: 0
	}
]

test('dummy is called', () => {
	const blogs = []

	const result = listHelper.dummy(blogs)
	expect(result).toBe(1)
})

describe("Total likes", () => {


	test("gives 0 likes for an empty list", () => {
		let result = listHelper.totalLikes([])

		expect(result).toBe(0)
	})

	test("gives correct likes for a list with one blog", () => {
		let result = listHelper.totalLikes(listWithOneBlog)

		expect(result).toBe(5)
	})

	test("gives correct likes for a list with many blogs", () => {
		let result = listHelper.totalLikes(blogs)

		expect(result).toBe(7+5+12+10+0+2)
	})
})

describe('Favorite blog', () => {

	test("gives null from an empty list", () => {
		let result = listHelper.favoriteBlog([])

		expect(result).toBe(null)
	})

	test("gives the only blog from a list with one blog", () => {
		let result = listHelper.favoriteBlog(listWithOneBlog)

		expect(result).toEqual({
			_id: '5a422aa71b54a676234d17f8',
			title: 'Go To Statement Considered Harmful',
			author: 'Edsger W. Dijkstra',
			url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
			likes: 5,
			__v: 0
		})
	})

	test("gives correct blog from a list with many blogs", () => {
		let result = listHelper.favoriteBlog(blogs)

		expect(result).toEqual({
			_id: "5a422b3a1b54a676234d17f9",
			title: "Canonical string reduction",
			author: "Edsger W. Dijkstra",
			url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
			likes: 12,
			__v: 0
		})
	})

})

describe("Most blogs", () => {

	test("gives null from an empty list", () => {
		let result = listHelper.mostBlogs([])

		expect(result).toBe(null)
	})

	test("gives the only author from a list with one blog", () => {
		let result = listHelper.mostBlogs(listWithOneBlog)

		expect(result).toEqual({
			author: 'Edsger W. Dijkstra',
			likes: 5,
			blogs: 1
		})
	})

	test("gives the correct author from a list with many blogs", () => {
		let result = listHelper.mostBlogs(blogs)

		expect(result).toEqual({
			author: "Robert C. Martin",
			blogs: 3,
			likes: 12
		})
	})

})

describe("Most likes", () => {

	test("gives null from an empty list", () => {
		let result = listHelper.mostLikes([])

		expect(result).toBe(null)
	})

	test("gives the only author from a list with one blog", () => {
		let result = listHelper.mostLikes(listWithOneBlog)

		expect(result).toEqual({
			author: 'Edsger W. Dijkstra',
			likes: 5,
			blogs: 1
		})
	})

	test("gives the correct author from a list with many blogs", () => {
		let result = listHelper.mostLikes(blogs)

		expect(result).toEqual({
			author: 'Edsger W. Dijkstra',
			likes: 17,
			blogs: 2
		})
	})

})