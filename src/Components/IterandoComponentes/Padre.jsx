import React from 'react'
import Hijo from './Hijo.jsx'

const Padre = () => {

const nombres=['Luis','Carlos','Angel']
    
return (
        <>
   <ul>
       {nombres.map(nombre=>(
      
        <Hijo nombreLista={nombre}/>
        
       ))}
   </ul>
        </>
    )
}

export default Padre
