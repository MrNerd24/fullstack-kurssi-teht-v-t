import React, {Component} from 'react'

export default class Statistic extends Component {

    render() {
        return(
            <tr {...this.props}>
                <td>
                    {this.props.text}:
                </td>
                <td>
                    {this.props.value} {this.props.unit}
                </td>
            </tr>
        )
    }

}