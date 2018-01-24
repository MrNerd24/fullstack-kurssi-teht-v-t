import React, {Component} from 'react'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Osa = (props) => {
    return (
        <p>{props.nimi} {props.tehtavia}</p>
    )
}

const Sisalto = (props) => {
    return (
        props.osat.map((osa) => {
            return (
                <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia}/>
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

export default Kurssi

