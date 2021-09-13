import React,{useState} from 'react'



const Formularios = () => {

    const[nombre,setNombre]=useState(false)
    const[apellido,setApellido]=useState(false)
    const[email,setEmail]=useState(false)
    const[password,setPassword]=useState(false)

    const nombreRegex=/^[a-zA-Z]{3,16}$/
    const emailRegex=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/
    const apellidoRegex=/^[a-zA-Z]{3,16}$/
    const passwordRegex=/^[a-z0-9_-]{6,18}$/   


    const valorNombre=(nombreValidar)=>{
        if(nombreValidar.trim()){
          if(nombreRegex.test(nombreValidar)){
              setNombre(true)
          }
        }
    }
    
    const valorApellido=(apellidoValidar)=>{
        if(apellidoValidar.trim()){
            if(apellidoRegex.test(apellidoValidar)){
                setApellido(true)
            }
        }
    }
    
    const valorEmail=(emailValidar)=>{
         if(emailValidar.trim()){
             if(emailRegex.test(emailValidar)){
                 setEmail(true)
             }
         }
    }
    
    const valorPassword=(passwordValidar)=>{
         if(passwordValidar.trim()){
             if(passwordRegex.test(passwordValidar)){
                 setPassword(true)
             }
         }
    }

    const enviar=(e)=>{
        e.preventDefault()
    
      if(nombre===true && 
         apellido===true &&
         email===true && 
         password===true){
             console.log('Los datos han sido validados correctamente')
         }else{
             console.log('Envia los datos correctamente y no dejes ningún campo vacio')
         } 

         setTimeout(()=>{window.location.reload()},5000)
    
    }



    
    return (
        <>
           <form onSubmit={e=>enviar(e)}>
         <h3>Escribe Nombre</h3>
         <input type="text" 
                onChange={e=>valorNombre(e.target.value)}/>
         <h3>Escribe Apellido</h3>
         <input type="text" 
                onChange={e=>valorApellido(e.target.value)}/>
         <h3>Escribe Email</h3>
         <input type="email" 
                 onChange={e=>valorEmail(e.target.value)}/>
         <h3>Escribe Password</h3>
         <input type="password" 
                  onChange={e=>valorPassword(e.target.value)}/><br/>

         <input type="submit" />
   
           </form>
        </>
    )
}

export default Formularios
