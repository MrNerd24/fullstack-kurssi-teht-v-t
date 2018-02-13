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

	test('posting without defined likes sets likes to 0', async () => {
		let newBlog = {
			title: "Huono blogi",
			author: "minä",
			url: "ei ole",
		}

		await api.post('/api/blogs').send(newBlog).expect(201).expect('Content-Type', /application\/json/)

		let response = await api.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/)

		let addedBlog = response.body.find((responseItem) => responseItem.title === "Huono blogi")

		expect(addedBlog.likes).toBe(0)
	})

	test('new blogs without title or url get rejected', async () => {
		let newBlog = {
			author: "minä",
		}

		await api.post('/api/blogs').send(newBlog).expect(400)

		newBlog.url = "ei ole"

		await api.post('/api/blogs').send(newBlog).expect(400)

		newBlog.title = "Nimetön blogi"
		delete newBlog.url

		await api.post('/api/blogs').send(newBlog).expect(400)
	})

	test('deleting individual blog works correctly', async () => {
		let newBlog = {
			author: "minä",
			title: "tuhma blogi",
			url: 'ei ole',
		}

		let response = await api.post('/api/blogs').send(newBlog).expect(201)

		await api.delete('/api/blogs/' + response.body.id).expect(204)
	})

	test("404 returned when trying to delete something that doesn't exist", async () => {
		await api.delete('/api/blogs/' + 42).expect(404)
	})

	test('updating works with expected input', async () => {
		let newBlog = {
			author: "minä",
			title: "ok blogi",
			url: 'ei ole',
		}

		let response = await api.post('/api/blogs').send(newBlog).expect(201)

		let blogsInDb = await Blog.find({}).exec()

		expect(blogsInDb.map((blog) => blog.title)).toContain('ok blogi')

		newBlog.title = "parempi blogi"

		await api.put('/api/blogs/' + response.body.id).send(newBlog).expect(200)

		blogsInDb = await Blog.find({}).exec()

		expect(blogsInDb.map((blog) => blog.title)).toContain('parempi blogi')
		expect(blogsInDb.map((blog) => blog.title)).not.toContain('ok blogi')

	})

	test('put with incorrect id returns 404', async () => {

		let newBlog = {
			author: "minä",
			title: "ok blogi",
			url: 'ei ole',
		}

		await api.put('/api/blogs/' + 1337).send(newBlog).expect(404)
	})

})



afterAll(async () => {
	await Blog.remove({})
	server.close()
})