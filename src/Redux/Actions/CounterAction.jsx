//nombre de las acciones 
export const INCREMENT='INCREMENT'
export const DECREMENT='DECREMENT'


//creadoras de acciones  

export const increment=()=>{
    return{
        type:INCREMENT
    }
}

export const decrement=()=>{
    return{
        type:DECREMENT
    }
}