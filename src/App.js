import './App.css';
import Boton from './Components/Boton';
import Contador from './Components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const clickMU = () =>{
    setNumClicks(nroClicks+1);
  }

  const clickMT = () => {
    setNumClicks(nroClicks + 3);
  }

  const clickMsU =() =>{
    setNumClicks(nroClicks-1)
  }
  const clickMsT =() =>{
    setNumClicks(nroClicks-3)
  }
  
  const reiniciar = () => {
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className='contenedor-principal'>
        
        <Contador nroClicks={nroClicks}/>
      
          <div className='contenedor-botones'>
            <div className='contenedorS'>
              <Boton texto='+3' esBotonClick={true} functionClick={clickMT} />
              <Boton texto='+1' esBotonClick={true} functionClick={clickMU} />  
            </div>
            <div className='contenedorM'>
              <Boton texto= '-1' esBotonClick={true} functionClick={clickMsT} />
              <Boton texto= '-3' esBotonClick={true} functionClick={clickMsU} />
            </div>
            <div className='contenedorR'>
              <Boton texto='Reiniciar' esBotonClick={false} functionClick={reiniciar}/> 
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
