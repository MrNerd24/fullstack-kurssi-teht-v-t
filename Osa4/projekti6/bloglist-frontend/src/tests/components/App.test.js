import React from 'react'
import {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../../App'

jest.mock("../../services/blogs")
jest.mock("../../services/Login")


describe("<App />", () => {

	let app = null;

	beforeEach(() => {
		window.localStorage.setItem("username", "")
		window.localStorage.setItem("password", "")
		app = mount(
			<App />
		)
	})

	it("shows login form when not logged in", () => {

		app.update()

		expect(app.text()).toEqual(expect.stringContaining("Log in to application"))
		expect(app.text()).not.toEqual(expect.stringContaining("Create a blog"))
		expect(app.text()).not.toEqual(expect.stringContaining("Blogs"))
		expect(app.text()).not.toEqual(expect.stringContaining("Hieno blogi"))


	})

	it("shows blogs when user is logged in", async () => {
		app.update()

		let usernameField = app.find('[label="Username"]').first()
		let passwordField = app.find('[label="Password"]').first()

		await usernameField.simulate('change', { target: { value: 'Testi' } })
		await passwordField.simulate('change', { target: { value: '1234' } })

		let form = app.find("form").first().find('[type="submit"]')
		await form.simulate("submit")

		app.update()
		setTimeout(() => {
			expect(app.text()).not.toEqual(expect.stringContaining("Log in to application"))
			expect(app.text()).toEqual(expect.stringContaining("Create a blog"))
			expect(app.text()).toEqual(expect.stringContaining("Blogs"))
			expect(app.text()).toEqual(expect.stringContaining("Hieno blogi"))
			done()
		}, 500)

	})

})