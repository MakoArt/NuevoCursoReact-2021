import { createContext,useState,useEffect } from "react";
import axios from 'axios'

//Creamos Context 

export const UserContext=createContext()

//Creamos el provider  

const UserProvider=(props)=>{

//creamos el state del context  

const [users,setUsers]=useState([])

//ejecutamos el pedido a la api 

useEffect(()=>{
    const obtenerUsuarios=async()=>{
      
    const url='https://jsonplaceholder.typicode.com/users'
    const usuarios=await axios(url)
     setUsers(usuarios)


    }
    obtenerUsuarios()

},[])

return(

<UserContext.Provider value={{users}}>


{props.children}
</UserContext.Provider>


)

}
export default UserProvider