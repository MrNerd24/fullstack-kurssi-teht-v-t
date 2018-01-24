import React, {Component} from 'react'

export default class CountryInfo extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.country.name}</h1>
                <p>Capital: {this.props.country.capital}</p>
                <p>Population: {this.props.country.population}</p>
                <img style={Style.flag} src={this.props.country.flag}/>

            </div>
        )
    }

}

const Style = {
    flag: {
        width: 300
    }
}