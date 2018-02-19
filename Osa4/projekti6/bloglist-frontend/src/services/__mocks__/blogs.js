let blogs = [
	{
		title: "Hieno blogi 1",
		author: "Minä",
		url: "ei ole",
		likes: 50,
		_id: "1"
	},
	{
		title: "Hieno blogi 2: onnistumisia",
		author: "Minä myös",
		url: "Vain käsinkirjoitettuna",
		likes: 500,
		_id: "2"
	}
]



const getAll = () => {
	return Promise.resolve(blogs)
}

export default {getAll}