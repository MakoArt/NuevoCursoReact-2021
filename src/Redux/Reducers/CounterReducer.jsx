import {INCREMENT,DECREMENT} from '../Actions/CounterAction.jsx'

//REDUCER  
//es una funcion pura que nos devuelve el estado 
//actual 


const initialState=0 

function contador(state=initialState,action){

   switch(action.type){

       case INCREMENT: 
           return state + 1 

        case DECREMENT: 
            return state - 1 
       
        default: 
            return state


   }


}
export default contador