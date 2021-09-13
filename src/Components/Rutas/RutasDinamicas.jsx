import React from 'react'

const RutasDinamicas = (props) => {

    console.log(props)
    return (
        <div>
        <h1>El usuario es:{props.match.params.id}</h1>
        </div>
    )
}

export default RutasDinamicas
