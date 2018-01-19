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

    increaseValue = (type) => {
        return () => {
            let newState = {...this.state.counts}
            newState[type]++
            this.setState({counts: newState})
        }
    }

    render() {
        return (
            <div>
                <h1>Anna palautetta</h1>
                <OpinionButtons
                    handleGoodClick={this.increaseValue("good")}
                    handleNeutralClick={this.increaseValue("neutral")}
                    handleBadClick={this.increaseValue("bad")}
                />
                <h1>Statistiikka</h1>
                <Statistics counts={this.state.counts}/>
            </div>
        )
    }

}