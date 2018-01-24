import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    name: 'Arto Hellas',
                    number: "040-123456"
                }
            ],
            newName: '',
            newNro: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let persons = this.state.persons
        if (!persons.some((person) => person.name === this.state.newName)) {
            persons = [...persons, {name: this.state.newName, number: this.state.newNro}]
        }

        this.setState({
            persons,
            newName: "",
            newNro: ""
        })
    }

    handleNameChange = (event) => {
        let value = event.target.value
        this.setState({
            newName: value
        })
    }

    handleNumberChange = (event) => {
        let value = event.target.value
        this.setState({
            newNro: value
        })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        nimi: <input value={this.state.newName} onChange={this.handleNameChange}/>
                    </div>
                    <div>
                        numero: <input value={this.state.newNro} onChange={this.handleNumberChange}/>
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <table>
                    <tbody>
                    {this.state.persons.map((person) => {
                        return (
                            <tr key={person.name}>
                                <td>{person.name}</td>
                                <td>{person.number}</td>
                            </tr>
                        )
                    })}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default App