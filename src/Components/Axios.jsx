import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Axios = () => {
   
    const[users,setUsers]=useState([])
    
    useEffect(()=>{
         const cargarUsuarios=async()=>{
         const res=await axios('https://jsonplaceholder.typicode.com/users')
         console.log(res.data)
         setUsers(res.data)
         }
         cargarUsuarios()

    },[])

    return (
        <>
            <ul>
                {users.map(user =>(

                 <li key={user.id}>
                    Nombre:{user.name}<br/>
                    Apellido:{user.username}<br/>
                    Email:{user.email}


                 </li>

                ))}
            </ul>
        </>
    )
}

export default Axios
