import React, {Component} from 'react'


export default class InformationRow extends Component {

    render() {
        return(
            <tr>
                <td>{this.props.person.name}</td>
                <td>{this.props.person.number}</td>
            </tr>
        )
    }

}