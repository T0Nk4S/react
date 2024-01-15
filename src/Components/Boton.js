import React from "react";
import '../Style/Boton.css'

function Boton({texto,esBotonClick,functionClick}){
    return(
        <button className={esBotonClick ? "boton-click":"boton-reiniciar"}
            onClick={functionClick}>{texto}
        </button>
    )
}

export default Boton;