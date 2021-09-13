import React from 'react'



const IterandoArraysYArraysObjetos = () => {
    
    const animales=['pato','loro','gato','perro']
    
    const personas=[
        {
            id:0,
            nombre:'Maria',
            puesto:'limpiadora'
        },
        {
            id:1,
            nombre:'Pepi',
            puesto:'lavanderia'
        },
        {
            id:2,
            nombre:'Sara',
            puesto:'Bar'
        }

    ]
    
    return (
        <>
      <ul>
          {animales.map(animal=>(
             
             <li>{animal}</li>

          ))}
      </ul>

      <ul>
          {personas.map(persona=>(
             
        <li key={persona.id}>
               Id:{persona.id}<br/>
            Nombre:{persona.nombre}<br/>
            Puesto:{persona.puesto}
                
        </li>

          ))}
     </ul>   
       
        </>
    )
}

export default IterandoArraysYArraysObjetos
