import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas', number: '040-123456' },
                { name: 'Martti Tienari', number: '040-123456' },
                { name: 'Arto Järvinen', number: '040-123456' },
                { name: 'Lea Kutvonen', number: '040-123456' }
            ],
            newName: '',
            newNumber: '',
            filter: ''
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

    handleFilterChange = (event) => {
        let value = event.target.value
        this.setState({
            filter: value
        })
    }

    render() {

        let persons = this.state.filter ? this.state.persons.filter((person) => person.name.toLowerCase().search(this.state.filter.toLowerCase()) >= 0) : this.state.persons

        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <div>
                    Rajaa näytettäviä <input value={this.state.filter} onChange={this.handleFilterChange} />
                </div>
                <h2>Lisää uusi</h2>
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
                    {persons.map((person) => {
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