import React from 'react'
import { useParams } from 'react-router-dom'

const Params=()=>{
    const {id}=useParams()
    function guardar(){
    if(id=="new"){
        alert("Contacto creado");
        return;
    }
    if(Number.isInteger(parseInt(id))){
        alert(`Contacto ${id} actualizado`);
        return;
    }
   }
 
    return (
    <div>
        <h2>
            {id=="new" ? "Crear" : "Editar"} contacto {`${id}`}
        </h2>
        <button className="btn btn-primary" onClick={guardar}>
            Guardar
        </button>
        
    </div>
    
)}

export default Params