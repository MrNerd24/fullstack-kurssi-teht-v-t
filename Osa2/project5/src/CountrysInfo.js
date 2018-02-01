import React, {Component} from 'react'
import Axios from 'axios'
import CountryList from "./CountryList";
import CountryInfo from "./CountryInfo"

export default class CountrysInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data:[]
        }
    }

    componentWillMount() {
        Axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
            this.setState({data: response.data})
        })
    }

    getShownCountries = () => {
        return this.state.data.filter((country) => country.name.toLowerCase().includes(this.props.filter.toLowerCase()))
    }

    handleCountryClick = (country) => {
        this.props.onCountrySelect(country.name)
    }

    render() {
        let shownCountries = this.getShownCountries()
        if(shownCountries.length > 10) {
            return(
                <p>Too many matches, specify another filter.</p>
            )
        } else if(shownCountries.length > 1) {
            return(
                <CountryList countries={shownCountries} handleCountryClick={this.handleCountryClick}/>
            )
        } else if (shownCountries.length === 1) {
            return(
                <CountryInfo country={shownCountries[0]} />
            )
        } else {
            return(
                <p>None of the countries matched your filter.</p>
            )

        }
    }


}