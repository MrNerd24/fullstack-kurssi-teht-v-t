import React from 'react'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SimpleBlog from '../../components/SimpleBlog'

describe('<SimpleBlog />', () => {

	let simpleBlog
	let eventListener = jest.fn()

	beforeEach(() => {
		simpleBlog = shallow(
			<SimpleBlog
				blog={{
					title: "Hieno blogi",
					author: "Minä",
					url: "ei ole",
					likes: 50
				}}
				onClick={eventListener}
			/>
		)
	})

	it("renders blog's title, author and likes amount", () => {
		let firstDiv = simpleBlog.find("div").at(1)
		expect(firstDiv.text()).toContain("Hieno blogi Minä")

		let secondDiv = simpleBlog.find("div").at(2)
		expect(secondDiv.text()).toContain("blog has 50 likes")
	})

	it("calls the eventlistener correctly when button is clicked", () => {
		let button = simpleBlog.find("button")
		button.simulate("click")
		button.simulate("click")

		expect(eventListener.mock.calls.length).toBe(2)
	})

})