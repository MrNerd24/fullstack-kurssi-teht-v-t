import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './Store'


const render = () => {
	ReactDOM.render(
		<App store={Store} />,
		document.getElementById('root')
	)
}

render()
Store.subscribe(render)