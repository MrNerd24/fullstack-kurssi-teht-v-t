const supertest = require('supertest')
const { app, server } = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const blogs = [
	{
		title: "React patterns",
		author: "Michael Chan",
		url: "https://reactpatterns.com/",
		likes: 7,
	},
	{
		title: "Go To Statement Considered Harmful",
		author: "Edsger W. Dijkstra",
		url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
		likes: 5,
	},
	{
		title: "Canonical string reduction",
		author: "Edsger W. Dijkstra",
		url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
		likes: 12,
	},
	{
		title: "First class tests",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
		likes: 10,
	},
	{
		title: "TDD harms architecture",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
		likes: 0,
	},
	{
		title: "Type wars",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
		likes: 2
	}
]

beforeAll(async () => {
	blogs.forEach(async (blogsItem) => {
		let mongooseObject = new Blog(blogsItem)
		mongooseObject.save()
	})
})

describe("Blogs", () => {

	test('get gives correct blogs', async () => {
		let response = await api.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/)

		let titles = response.body.map((blog) => blog.title)

		expect(titles).toContainEqual("TDD harms architecture")
		expect(titles).toContainEqual("React patterns")
	})

	test('posting works correctly', async () => {
		let newBlog = {
			title: "Hieeno blogi",
			author: "minä",
			url: "ei ole",
			likes: 1000
		}

		await api.post('/api/blogs').send(newBlog).expect(201).expect('Content-Type', /application\/json/)

		let response = await api.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/)

		let titles = response.body.map((responseItem) => responseItem.title)

		expect(titles).toContain('Hieeno blogi')

	})

})



afterAll(async () => {
	await Blog.remove({})
	server.close()
})