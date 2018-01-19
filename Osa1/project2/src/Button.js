import React, {Component} from 'react'

export default class Button extends Component {

    render() {
        return (
            <button {...this.props} style={{backgroundColor:this.props.color, ...Style.button, ...this.props.style}} />
        )
    }

}

const Style = {
    button: {
        marginLeft:5,
        flex:1,
        border:"none",
        padding:5,
        textAlign:"center",
    }
}