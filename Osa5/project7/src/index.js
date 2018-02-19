import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import reducer from "./reducer";

let store = createStore(reducer)

const Statistiikka = () => {
	const palautteita = Object.keys(store.getState()).reduce((value, key) => value += store.getState()[key], 0)

	if (palautteita === 0) {
		return (
			<div>
				<h2>stataistiikka</h2>
				<div>ei yhtään palautetta annettu</div>
			</div>
		)
	}

	return (
		<div>
			<h2>statistiikka</h2>
			<table>
				<tbody>
				<tr>
					<td>hyvä</td>
					<td>{store.getState().good}</td>
				</tr>
				<tr>
					<td>neutraali</td>
					<td>{store.getState().ok}</td>
				</tr>
				<tr>
					<td>huono</td>
					<td>{store.getState().bad}</td>
				</tr>
				<tr>
					<td>keskiarvo</td>
					<td>{store.getState().good - store.getState().bad}</td>
				</tr>
				<tr>
					<td>positiivisia</td>
					<td>{store.getState().good + store.getState().ok}</td>
				</tr>
				</tbody>
			</table>

			<button onClick={() => store.dispatch({type: 'ZERO'})}>nollaa tilasto</button>
		</div >
	)
}

export default class App extends React.Component {
	klik = (nappi) => () => {
		store.dispatch({type: nappi})
	}

	render() {
		return (
			<div>
				<h2>anna palautetta</h2>
				<button onClick={this.klik('GOOD')}>hyvä</button>
				<button onClick={this.klik('OK')}>neutraali</button>
				<button onClick={this.klik('BAD')}>huono</button>
				<Statistiikka />
			</div>
		)
	}
}

let renderAll = () => {
	ReactDOM.render(<App />, document.getElementById('root'));
}

renderAll()
store.subscribe(renderAll)

