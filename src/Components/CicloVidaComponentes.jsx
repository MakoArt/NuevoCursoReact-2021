import React, { Component } from 'react';


class CicloVidaComponentes extends Component {
    constructor(props) {
        super(props);
        this.state = {  

            nombre:'Alberto',
            evento:null
        }
    }
    
    cambiarNombre(){
        this.setState({nombre:'Carlos'})
    }


  //montamos el componente(eventos,peticiones http)
   componentDidMount(){
       this.state.evento=window.addEventListener('resize',()=>{
           console.log(window.innerWidth)         
       })
   }
   
   //actualización del componente(actualizaciones)
   componentDidUpdate(prevProps,prevState){
      if(prevState===this.state.nombre){
          console.log('Mi estado no ha cambiado')
      }else{
          console.log('Mi estado si ha cambiado y ahora me llamo',this.state.nombre)
          
      }
   }
   
   //desmontaje de el componente(limpiamos eventos y timers)
   componentWillUnmount(){
        
     window.removeEventListener(this.state.evento)

   }

    render() { 
        return ( 
            <>
     <h1>{this.state.nombre}</h1>
      <button onClick={this.cambiarNombre.bind(this)}>CambiarNombre</button>

            </>
         );
    }
}
 
export default CicloVidaComponentes;