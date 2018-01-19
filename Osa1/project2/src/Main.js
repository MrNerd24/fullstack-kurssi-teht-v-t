import React, {Component} from 'react'
import OpinionButtons from "./OpinionButtons";
import Statistics from "./Statistics";

export default class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counts: {
                good:0,
                neutral:0,
                bad:0
            }
        }

    }

    render() {
        return (
            <div>
                <h1>Anna palautetta</h1>
                <OpinionButtons
                    handleGoodClick={() => this.setState({counts: {...this.state.counts, good: this.state.counts.good +1}})}
                    handleNeutralClick={() => this.setState({counts: {...this.state.counts, neutral: this.state.counts.neutral +1}})}
                    handleBadClick={() => this.setState({counts: {...this.state.counts, bad: this.state.counts.bad +1}})}
                />
                <h1>Statistiikka</h1>
                <Statistics counts={this.state.counts}/>
            </div>
        )
    }

}