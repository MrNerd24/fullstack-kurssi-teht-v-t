import React from 'react';
import AddingForm from "./AddingForm";
import TextInput from "./TextInput";
import InformationTable from "./InformationTable";
import ServerDao from "./ServerDao";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {name: 'Arto Hellas', number: '040-123456'},
                {name: 'Martti Tienari', number: '040-123456'},
                {name: 'Arto Järvinen', number: '040-123456'},
                {name: 'Lea Kutvonen', number: '040-123456'}
            ],
            newName: '',
            newNumber: '',
            filter: ''
        }

        this.serverDao = new ServerDao()
    }

    async componentWillMount() {
        let data = await this.serverDao.getPersons()
        this.setState({persons: data})
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
            newNumber: value
        })
    }

    handleSubmit = async () => {
        console.log(this.state)
        let newPerson = {name: this.state.newName, number: this.state.newNumber}
        let persons = this.state.persons
        console.log(newPerson)
        console.log(persons)
        if (!persons.some((person) => person.name === this.state.newName)) {
            let newPersonWithId = await this.serverDao.postPerson(newPerson)
            console.log(newPersonWithId)
            persons = [...persons, newPersonWithId]
            console.log(persons)
        }

        this.setState({
            persons,
            newName: "",
            newNumber: ""
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
                <TextInput
                    fieldName="Rajaa sisältöä"
                    value={this.state.filter}
                    handleValueChange={this.handleFilterChange}
                />
                <h2>Lisää uusi</h2>
                <AddingForm
                    name={this.state.newName}
                    number={this.state.newNumber}
                    handleNameChange={this.handleNameChange}
                    handleNumberChange={this.handleNumberChange}
                    handleSubmit={this.handleSubmit}
                />
                <h2>Numerot</h2>
                <InformationTable
                    persons={persons}
                />
            </div>
        )
    }
}

export default App