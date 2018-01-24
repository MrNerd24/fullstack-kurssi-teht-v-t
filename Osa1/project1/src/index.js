import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Osa = (props) => {
    return (
        <p>{props.osa} {props.tehtavia}</p>
    )
}

const Sisalto = (props) => {
    return (
        props.osat.map((osa) => {
            return (
                <Osa osa={osa.osa} tehtavia={osa.tehtavia}/>
            )
        })
    )
}

const Yhteensa = (props) => {
    const summa = props.osat.reduce((summa, osa) => {
        return summa + osa.tehtavia
    }, 0)
    return (
        <p>yhteensä {summa} tehtävää</p>
    )
}

const Kurssi = (props) => {
    let kurssi = props.kurssi
    return (
        <div>
            <Otsikko kurssi={kurssi.nimi}/>
            <Sisalto osat={kurssi.osat}/>
            <Yhteensa osat={kurssi.osat}/>
        </div>

    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                osa: 'Reactin perusteet',
                tehtavia: 10

            },
            {
                osa: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                osa: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }

    return (
        <div>
            <Kurssi kurssi={kurssi}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)