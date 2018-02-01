import React, {Component} from 'react';
import TextInput from "./TextInput";
import CountrysInfo from "./CountrysInfo";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filter: ""
        }
    }

    handleFilterChange = (event) => {
        this.setState({filter: event.target.value})
    }

    handleCountrySelect = (country) => {
        this.setState({filter: country})
    }

    render() {
        return (
            <div>
                <TextInput
                    fieldName="Find countries"
                    value={this.state.filter}
                    handleValueChange={this.handleFilterChange}
                />

                <CountrysInfo
                    filter={this.state.filter}
                    onCountrySelect={this.handleCountrySelect}
                />

            </div>
        );
    }
}

export default App;
