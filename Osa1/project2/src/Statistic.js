import React, {Component} from 'react'

export default class Statistic extends Component {

    render() {
        return(
            <p {...this.props} >
                {this.props.text}: {this.props.value} {this.props.unit}
            </p>
        )
    }

}