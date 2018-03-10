import React, {Component} from 'react'
import Store from './Store'
import {Provider} from "react-redux";
import Main from "./Main";

export default class App extends Component {

	render() {
		return(
			<Provider store={Store}>
				<Main/>
			</Provider>
		)

	}

}