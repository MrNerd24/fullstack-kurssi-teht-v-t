import React, {Component} from 'react'
import Statistic from "./Statistic";

export default class Statistics extends Component {


    getAverage() {
        let sum = this.props.counts.good-this.props.counts.bad
        let count = this.props.counts.good+this.props.counts.bad+this.props.counts.neutral
        return Math.round((sum/count)*10000)/100
    }

    getPositives() {
        let sum = this.props.counts.good
        let count = this.props.counts.good+this.props.counts.bad+this.props.counts.neutral
        return Math.round((sum/count)*10000)/100
    }


    render() {
        return (
            <div>
                <Statistic
                    text="Hyvä"
                    value={this.props.counts.good}
                />
                <Statistic
                    text="Neutraali"
                    value={this.props.counts.neutral}
                />
                <Statistic
                    text="Huono"
                    value={this.props.counts.bad}
                />
                <Statistic
                    text="Keskiarvo"
                    value={this.getAverage()}
                    unit="%"
                />
                <Statistic
                    text="Positiivisia"
                    value={this.getPositives()}
                    unit="%"
                />
            </div>
        )
    }



}