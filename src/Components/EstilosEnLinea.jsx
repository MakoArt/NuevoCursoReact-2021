import React,{Component} from 'react'

class EstilosEnLinea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

    let age=38;
     
    const titulo={
        
        textAlign:'center',
        color:'green',
        backgroundColor:age>=37 ? 'red' : 'orangered'
        
    }
          
        return ( 
            <>
         <h1 style={titulo}>SOY UN TÍTULO</h1>
            </>
         );
    }
}
 
export default EstilosEnLinea;