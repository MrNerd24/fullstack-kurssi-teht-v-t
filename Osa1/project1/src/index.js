import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Osa = (props) => {
    return(
        <p>{props.osa} {props.tehtavia}</p>
    )
}

const Sisalto = (props) => {
    return(
        props.osat.map((osa)=> {
            return(
                <Osa osa={osa.osa} tehtavia={osa.tehtavia}/>
            )
        })
    )
}

const Yhteensa = (props) => {
    return(
        <p>yhteensä {props.summa} tehtävää</p>
    )
}

const App = () => {
    const osat = [
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

    return (
        <div>
            <Otsikko kurssi='Half Stack -sovelluskehitys'/>
            <Sisalto osat={osat}/>
            <Yhteensa summa={osat.reduce((summa, osa) => {return summa + osa.tehtavia}, 0)}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)