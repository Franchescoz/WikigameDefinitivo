"use client"
import { useState } from "react";
export default function VistaJuego() {
    const [editar, setEditar] = useState(false);
    const [titulo, setTitulo] = useState("TITULO DEL JUEGO");
    const [consolas, setConsolas] = useState("");
    const [tipo, setTipo] = useState("");{/*Constantes de estado para guardar toda la informacion que reciba cuando edites el juego */}
    const [descripcion, setDescripcion] = useState("descripcion");
    const portada = "portadadb3.jpg";
    const gameplays = [
    "gameplaydb3s.jpeg",
    "gameplaydb3s.jpeg",
    "gameplaydb3s.jpeg",
  ];

  function activarEdicion() {
    setEditar(true);
  }
{/*Funciones para activar o desactivar el modo edición*/}
  function cancelarEdicion() {
    setEditar(false);
  }

  function guardarEdicion() {
    setEditar(false);
  }
  {/*If para comproba si esta en modo edición */}
   if (editar) {
    return (
      <div>
        <img src={portada} alt="Portada" width={40} height={40} />
        {gameplays.map((imagen, index) => (
          <img key={index} src={imagen} alt={"Gameplay"} width={40} height={40}/>
        ))}
        <button>Cambiar</button>
        <form onSubmit={guardarEdicion}>
        <label>Titulo del juego:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required maxLength={50} />
        <p>{titulo.length>0?titulo.length<40?"Titulo valido":"El titulo es demasiado largo":"Pon el titulo"}</p>
        <label>Consolas:</label>
        <input type="text" value={consolas} onChange={(e) => setConsolas(e.target.value)} required/>
        <p>{consolas.length>4?"Consolas validas":"No tiene consolas"}</p>
        <label>Tipo de juego:</label>
        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} required/>
        <p>{tipo.length>4?"Tipos validos":"No tiene tipos"}</p>
        <label>Descripcion:</label>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required minLength={20}/>
        <p>{descripcion.length!=0?"Descripcion valida":"La descripcion no puede estar vacia"}</p>
        <button onClick={cancelarEdicion}>Cancelar</button>
        <button type="submit">Guardar</button>
        </form>
      </div>
    );
  }
    return (
        <div>  {/*Vista por defecto */}
                    <button onClick={activarEdicion} >Editar</button>
                    
                    <img src={portada} alt="Portada" width={40} height={70} />
                    {gameplays.map((imagen, index) => (
                    <img key={index} src={imagen} alt={"Gameplay"} width={40} height={40}/>
                    ))}
                
                    <h1>{titulo}</h1>
                    <p>Consolas :{consolas}</p>
                    <p >Tipo de juego :{tipo}</p>

                    <textarea value={descripcion} readOnly></textarea>
                    <button>Favorito</button>    

        </div>
    );
}