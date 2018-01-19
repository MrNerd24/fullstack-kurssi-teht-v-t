import React, {Component} from 'react'

export default class Statistics extends Component {


    getAverage() {
        let sum = this.props.counts.good-this.props.counts.bad
        let count = this.props.counts.good+this.props.counts.bad+this.props.counts.neutral
        return Math.round((sum/count)*10000)/100
    }


    render() {
        return (
            <div>
                <p>
                    hyvä: {this.props.counts.good}
                </p>
                <p>
                    neutraali: {this.props.counts.neutral}
                </p>
                <p>
                    huono: {this.props.counts.bad}
                </p>
                <p>
                    keskiarvo: {this.getAverage()}%
                </p>
            </div>
        )
    }


}