import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Store'
import {Provider} from "react-redux";


const render = () => {
	ReactDOM.render(
		<Provider store={Store}>
			<App/>
		</Provider>
		,
		document.getElementById('root')
	)
}

render()
Store.subscribe(render)