import {connect} from 'react-redux'
import {increment,decrement} from '../Redux/Actions/CounterAction.jsx'


const Contador=({increment,decrement,counter})=>{

 return(
     <>
     <button onClick={increment}>Incremento</button>
     <button onClick={decrement}>Decremento</button>
     <h1>{counter}</h1>
     </>
 )

}

const mapStateToProps = (state)=>{
    return {
        counter:state.contador
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contador)