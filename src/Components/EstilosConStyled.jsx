import React,{Component} from 'react'
import styled,{keyframes} from 'styled-components'
import './variables.css'

class EstilosConStyled extends Component {
   constructor(props) {
        super(props);
        this.state = {  }
    }

   render() { 

   const fondoTexto={
       color:'yellow'
   }
   
   const animaTexto=keyframes`
   
   from {
       color:green;
   }
   to {
       color:red
   }
   
   `


     const Titulo=styled.h1`
     
      color:green;
      font-size:29px;
      text-align:center;
      background-color:${fondoTexto.color};


      &:hover{
          color:orangered;
      }
        
      @media(min-width:800px){
          color:transparent;
      }

      animation:${animaTexto} 2s linear infinite;

     `
     const Cabecera=styled.header`
     
        height:var(--altoHeader);
        background-color:var(--colorHeader);
        width:var(--anchorHeader);
     
     `
        
     return ( 
            <>
        <Cabecera>
            <Titulo>
                Estamos en StyledComponents
            </Titulo>
        </Cabecera>
            </>
         );
    }
}
 
export default EstilosConStyled;