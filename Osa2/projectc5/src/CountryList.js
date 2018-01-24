import React, {Component} from 'react'

export default class CountryList extends Component {

    render() {
        return(
            <ul>
                {this.props.countries.map((country) => {
                    return(
                        <li key={country.name} onClick={(event) => {this.props.handleCountryClick(country)}}>{country.name}</li>
                    )
                })}
            </ul>
        )
    }

}