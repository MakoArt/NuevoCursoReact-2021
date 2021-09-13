import React from 'react'

/*
    onFocus(cuando un input esta activado o en foco)
    onBlur(cuando pulsamos fuera de un input que esta en foco)
    onChange(Cuando hay un cambio en el componente o input)
    onClick(Cuando se hace un click en el raton sobre el elemento)
    onDoubleClick(Cuando se hace un click en el raton sobre el elemento(nativamente no funciona en moviles))
    onKeyDown(Cuando pulsamos un botón del teclado )
    onKeyPress(Cuando presionamos una tecla)
    onMouseDown(Cuando presionamos el boton del mouse mouse hacia abajo)
    onMouseOver(Cuando pasamos por encima el ratón )
    onMouseLeave(Cuando salimos del elemento)

    */ 

     const foco=()=> console.log('estoy en foco')
     const blur=()=>  console.log('No estoy en foco')
     const change=()=> console.log('he cambiado')
     const click=()=> console.log('me has clickeado')
     const dobleClick=()=>alert(' me has clickeado dos veces')
     const pulsarTecla=()=>console.log('me estas pulsando')

const Eventos = () => {
    return (
        <>
        <form>
            <input onBlur={blur} 
                   onFocus={foco} type="text" 
                   onChange={change}
                   onKeyDown={pulsarTecla}/>

            
        </form>
        <button onClick={click}
                onDoubleClick={dobleClick}>Pulsame</button>
        
        
        </>
    )
}

export default Eventos
