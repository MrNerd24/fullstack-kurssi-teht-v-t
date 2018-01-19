import React, {Component} from 'react'
import Button from "./Button";

export default class OpinionButtons extends Component {

    render() {
        return(
            <div style={Style.wrapper}>
                <Button
                    color="rgb(33, 224, 43)"
                    onClick={this.props.handleGoodClick}
                >
                    hyvä
                </Button>
                <Button
                    color="rgb(224, 217, 31)"
                    onClick={this.props.handleNeutralClick}
                >
                    neutraali
                </Button>
                <Button
                    color="rgb(224, 31, 66)"
                    onClick={this.props.handleBadClick}
                >
                    huono
                </Button>
            </div>
        )
    }

}

const Style = {
    wrapper: {
        display:"flex",
        width:210
    },
}