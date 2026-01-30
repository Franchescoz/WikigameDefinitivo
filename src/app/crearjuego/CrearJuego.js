"use client"
import { useState } from "react";
export default function CrearVistaJuego() {
    const [titulo, setTitulo] = useState("Titulo del juego");
    const [consolas, setConsolas] = useState("Consolas");
    const [tipo, setTipo] = useState("Tipo de juego");
    const [descripcion, setDescripcion] = useState("descripcion");
    const portada = "portadadb3.jpg";
    const gameplays = [
    "gameplaydb3s.jpeg",
    "gameplaydb3s.jpeg",
    "gameplaydb3s.jpeg",
  ];
    return (
        <div>
                    <img src={portada} alt="Portada" width={40} height={40} />
                    {gameplays.map((imagen, index) => (
                        <img key={index} src={imagen} alt={"Gameplay"} width={40} height={40}/>
                    ))}{/* Este .map es para mostrar donde irian las imagenes al subirlas*/} 
                    <form >
                    <button>Cambiar</button> 
                    <label>Titulo del juego:</label>{/* Este formulario es para rellenar la información del juego*/} 
                    <input type="text" placeholder="Titulo del juego" value={titulo} onChange={(e)=> setTitulo(e.target.value)}required />
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required maxLength={50} />
                    <label>Consolas:</label>
                    <input type="text" placeholder="Consolas" value={consolas} onChange={(e)=> setConsolas(e.target.value)}required/>
                    <p>{consolas.length>4?"Consolas validas":"No tiene consolas"}</p>
                    <label>Tipo de juego:</label>
                    <input type="text" placeholder="Tipo de juego" value={tipo} onChange={(e)=> setTipo(e.target.value)}required/>
                    <p>{tipo.length>4?"Tipos validos":"No tiene tipos"}</p>
                    <label>Descripcion:</label>
                    <textarea type="text" placeholder="Descripcion" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}required minLength={20}/>
                    <p>{descripcion.length>19?"Descripcion valida":"La descripcion es muy corta"}</p>
                    <button>Cancelar</button>   
                    <button>Crear</button>   
                    </form>
                    
                       

        </div>
    );
}