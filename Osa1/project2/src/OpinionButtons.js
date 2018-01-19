import React, {Component} from 'react'

export default class OpinionButtons extends Component {

    render() {
        return(
            <div style={Style.wrapper}>
                <button
                    style={{...Style.button, backgroundColor:"rgb(33, 224, 43)" }}
                    onClick={this.props.handleGoodClick}
                >
                    hyvä
                </button>
                <button
                    style={{...Style.button, backgroundColor:"rgb(224, 217, 31)" }}
                    onClick={this.props.handleNeutralClick}
                >
                    neutraali
                </button>
                <button
                    style={{...Style.button, backgroundColor:"rgb(224, 31, 66)" }}
                    onClick={this.props.handleBadClick}
                >
                    huono
                </button>
            </div>
        )
    }

}

const Style = {
    wrapper: {
        display:"flex",
        width:210
    },
    button: {
        marginLeft:5,
        flex:1,
        border:"none",
        padding:5,
        textAlign:"center",
    }
}