import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let persons = this.state.persons
        if(!persons.some((person) => person.name === this.state.newName)) {
            persons = [...persons, {name: this.state.newName}]
        }

        this.setState({
            persons,
            newName: ""
        })
    }

    handleNameChange = (event) => {
        let value = event.target.value
        this.setState({
            newName: value
        })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <ul>
                    {this.state.persons.map((person) => {
                        return(
                            <li key={person.name}>{person.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default App