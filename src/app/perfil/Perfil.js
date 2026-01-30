"use client"
import { useState } from "react";
const array=[
    {id:1 , src:"portadadb3.jpg"},
    {id:2 ,  src:"portadaIE.jpg"},
    {id:3 ,  src:"portadaTS.jpeg"},
    {id:4 ,  src:"portadaM.jpeg"},
    
]

export default function Perfil(){
    const[editar,setEditar]= useState(false);
    const [nombre, setNombre] = useState("Fran el largo");
    const [descripcion, setDescripcion] = useState("Descripcion");
     const [juegos, setJuegos] = useState(array);
     {/*Constantes de estado para los campos y funciones para el modo edicion */}
    function activarEdicion(e) { 
        e.preventDefault()
        setEditar(true); 
    }
    function cancelarEdicion() { 
        setEditar(false); 
    }
    function guardarEdicion() { 
        setEditar(false);
     }
          {/*Funcion para eliminar juegos de favoritos */}
     function eliminarJuego(id) {
        setJuegos(juegos.filter(juego => juego.id !== id));
    }
    {/* if para comprobar si esta en modo edicion */}
    if (editar) {
        return <div>
            <form onSubmit={guardarEdicion}>
            <img src="logo 3.jpg"></img>
            <button>Cambiar</button>
            <input type="text" placeholder="usuario" value={nombre} onChange={(e) => setNombre(e.target.value)}required maxLength={50} />
            <p>{nombre.length<20?"Limite correcto":"El nombre es demasiado grande"}</p>
            <label>Fecha de registro : 12/01/2004</label>
            <textarea type="text" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required minLength={20}/>
            <p>{descripcion.length>19?"Descripcion valida":"La descripcion es muy corta"}</p>
            <button onClick={cancelarEdicion}>Cancelar</button>
            <button type="submit">Guardar</button>
            </form>
            <label>Favorito:</label>
            {juegos.map(juego => <div key={juego.id}>
                <Juegos objeto={juego} />
                <button onClick={()=>eliminarJuego(juego.id)}>Eliminar</button></div>)}
            
        </div>
    }

    return<div>     {/*Vista por defecto */}
        <img src="logo 3.jpg"></img>
        <button hidden="True">Banear</button>
        <button onClick={activarEdicion}>Editar</button>
        <h1>{nombre}</h1>
        <label>Fecha de registro : 12/01/2004</label>
        <textarea value={descripcion} readOnly></textarea>
        <label>Favorito:</label>
        {juegos.map(juego=><div key={juego.id}>
            <Juegos objeto={juego}/>
            </div>)
        }

    </div>
}
function Juegos({objeto}){

    return<div>     {/*Componente que renderiza cada juego de favoritos */}
        <img src={objeto.src} width={40} height={40}></img>
    </div>
}