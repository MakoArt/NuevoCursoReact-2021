import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
// import PrimerComponente from './Components/PrimerComponente.jsx'
// import Props from './Components/Props.jsx'
// import State from './Components/State.jsx'
// import EstilosTradicionales from './Components/EstilosTradicionales.jsx'
// import EstilosEnLinea from './Components/EstilosEnLinea.jsx'
// import EstilosEnModulo from './Components/EstilosEnModulo'
// import EstilosConStyled from './Components/EstilosConStyled.jsx'
// import Refs from './Components/Refs.jsx'
//  import CicloVidaComponentes from './Components/CicloVidaComponentes.jsx'
// import Hooks from './Components/Hooks.jsx'
// import Formularios from './Components/Formularios.jsx'
// import Eventos from './Components/Eventos.jsx'
// import RenderizadoCondicional from './Components/RenderizadoCondicional.jsx'
// import SpreadOperator from './Components/SpreadOperator.jsx'
// import IterandoArraysYArraysObjetos from './Components/IterandoArraysYArraysObjetos.jsx';
// import IterarKeys from './Components/IterarKeys.jsx';
// import Padre from './Components/IterandoComponentes/Padre.jsx'
// import ComunicacionComponentes1 from './Components/ComunicacionComponentes1.jsx'
// import ComunicacionComponentes2 from './Components/ComunicacionComponentes2.jsx'
// import Fetch from './Components/Fetch.jsx'
  // import Axios from './Components/Axios.jsx'
  // import Padre from './Components/Rutas/Padre.jsx'
  // import {useCount} from './Components/hooks/useCount.jsx'
   import {Provider} from 'react-redux'
   import store from './Redux/store.js'
   import Contador from './Components/Contador.jsx'
  
   function App() {

    //  const[contador]=useCount(0)

  // const lista=['pera ','manzana ','uva']
   
  // const [estado,setEstado]=useState(false)

  // const estadoComponente=()=>{
  //     setEstado(true)
  // }

  // const hijoLlamaPadre=()=>{
  //    console.log('llamando a padre desde el componente hijo')
  // }

  // const llamandoAHermano=()=>{
  //     setEstado(true)
  // }
  
  return (
     <>
     {/* <PrimerComponente/> */}
     {/* <Props  frutas={lista}/> */}
      {/* <State/> */}
      {/* <EstilosTradicionales/> */}
      {/* <EstilosEnLinea/> */}
      {/* <EstilosEnModulo/> */}
      {/* <EstilosConStyled/> */}
       {/* <Refs/> */}
       {/* <CicloVidaComponentes/> */}
       {/* <Hooks/> */}
       {/* <Formularios/> */}
       {/* <Eventos/> */}
       {/* <RenderizadoCondicional/> */}
       {/* <SpreadOperator/> */}
       {/* <IterandoArraysYArraysObjetos/> */}
       {/* <IterarKeys/> */}
       {/* <Padre/> */}
        {/* <Fetch/> */}
         {/* <Axios/> */}
         {/* <Padre/> */}
       {/* <ComunicacionComponentes1 llamaHermano2={llamandoAHermano} llamaPadre={hijoLlamaPadre} cambioEstado={estado}/>
       <ComunicacionComponentes2 nuevoEstado={estado} />
       <button onClick={estadoComponente}>Pulsa</button> */}
       
       {/* <h1>{contador}</h1> */}
       
       {/* <UserProvider>
            
            <ListaUsuarios/>

       </UserProvider> */}
     
     
     <Provider store={store}>
       
       <Contador/>

     </Provider>

  
     </>
  
  
  );
}

export default App;
