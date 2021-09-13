import React from 'react'

const SpreadOperator = () => {
    
    const animalesSalvajes=['ciervo','lobo','jabalí','vibora']
    const animalesDomesticos=['perro','gato','hamster','canario']
    
    
    const animales=[...animalesSalvajes , ...animalesDomesticos]
     

    // console.log(animales)

    const modelosEuropeas={
        Alemania:'Dina',
        Francia:'Cristine',
        España:'Carmen',
        Senegal:'Marta'
    }
    const modelosAfricanas={
        Senegal2:{
            Senegal:'Sonia'
        },
        Sudafrica:'Carmele',
        Sudan:'Sandra'
    }

    const modelos={...modelosEuropeas,...modelosAfricanas}
     

    console.log(modelos)
    return (
        <>
  
        </>
    )
}

export default SpreadOperator
