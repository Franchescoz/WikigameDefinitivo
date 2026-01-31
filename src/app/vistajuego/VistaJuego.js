"use client"
import { useState } from "react";
import Link from "next/link";

export default function VistaJuego() {
  const [editar, setEditar] = useState(false); 
  const [titulo, setTitulo] = useState("TITULO DEL JUEGO"); 
  const [consolas, setConsolas] = useState(""); 
  const [tipo, setTipo] = useState("");{/*Constantes de estado para guardar toda la informacion que reciba cuando edites el juego */} 
  const [descripcion, setDescripcion] = useState("descripcion"); 
  const portada = "portadadb3.jpg"; 
  const gameplays = [ "gameplaydb3s.jpeg", "gameplaydb3s.jpeg", "gameplaydb3s.jpeg", ]; 
  function activarEdicion()  { 
    setEditar(true); 

  } {/*Funciones para activar o desactivar el modo edición*/} 
  function cancelarEdicion() { 
    setEditar(false); 
  } 
  function guardarEdicion() { 
    setEditar(false); 
  } {/*If para comprobar si esta en modo edición */}
  if (editar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[url('/fondoSesion.png')] bg-cover bg-center font-montserrat">

        <form className="relative bg-night w-[95%] max-w-screen-xl rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow-2xl">

          
          <button type="button" onClick={cancelarEdicion}className="absolute top-3 left-3 border rounded-md p-1 hover:border-Lavanda transition sm:hidden">
            <img src="/volver.png" className="w-8 h-8"/>
          </button>

          <button type="submit" onClick={guardarEdicion}className="absolute top-3 right-3 border rounded-md p-1 hover:border-Lavanda transition sm:hidden" >
            <img src="/check-square.png" className="w-8 h-8"/>
          </button>

         
          <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
            <img src={portada} className="w-56 h-80 object-cover rounded-lg border-2"/>

            <div className="flex gap-2">
              {gameplays.map((img, i) => (
                <img key={i} src={img} className="w-20 h-20 rounded border object-cover"/>
              ))}
            </div>

            <button type="button" className="mt-2 border px-4 py-1 rounded hover:border-Lavanda transition">
              <img src="upload.png"/>
            </button>

           
            <div className="hidden sm:flex gap-4 mt-4">
              <button type="button" onClick={cancelarEdicion}className="border border-Lavanda bg-Lavanda text-white px-6 py-2 rounded font-medulaone">
                Cancelar
              </button>

              <button type="submit" onClick={guardarEdicion}  className="border border-Lavanda bg-night hover:bg-Lavanda text-white px-6 py-2 rounded font-medulaone">
                Guardar
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-2/3 text-white">
            <label className="font-motserrat">Titulo del juego:</label>
            <input value={titulo} onChange={e=>setTitulo(e.target.value)} className="bg-white text-black rounded px-2 py-1"/>
              <p>{titulo.length>0?titulo.length<40?"Titulo valido":"El titulo es demasiado largo":"Pon el titulo"}</p>
            <label className="font-motserrat">Consolas:</label>
            <input value={consolas} onChange={e=>setConsolas(e.target.value)} className="bg-white text-black rounded px-2 py-1"/>
              <p>{consolas.length>4?"Consolas validas":"No tiene consolas"}</p>
            <label className="font-motserrat">Tipo de juego:</label>
            <input value={tipo} onChange={e=>setTipo(e.target.value)} className="bg-white text-black rounded px-2 py-1"/>
               <p>{tipo.length>4?"Tipos validos":"No tiene tipos"}</p>
            <label className="font-motserrat">Descripcion:</label>
            <textarea value={descripcion} onChange={e=>setDescripcion(e.target.value)} className="bg-white text-black rounded px-2 py-2 h-40 resize-none"/>
               <p>{descripcion.length!=0?"Descripcion valida":"La descripcion no puede estar vacia"}</p>
          </div>

        </form>
      </div>
    );
  }
 return (
  <div className="min-h-screen flex items-center justify-center bg-[url('/fondoSesion.png')] bg-cover bg-center font-montserrat">
    <div className="relative bg-night w-[95%] max-w-screen-xl rounded-xl p-6 flex flex-col md:flex-row gap-6 shadow-2xl min-h-[40rem] text-white">
      <div className="absolute top-3 right-3 flex flex-col sm:flex-row gap-2">
  <button className="hover:border rounded-md p-1 hover:border-Lavanda transition">
    <img src="/heart.png" className="w-8 h-8"/>
  </button>


  <button onClick={ activarEdicion}className="  hover:border p-1 hover:border-Lavanda rounded-md transition">
    <img src="/pencil-square.png" className="w-8 h-8"/>{/**Esto se pondra un hidden e el momento que la cuenta no sea de admin */}
  </button>

</div>
       <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
        <img src={portada} className="w-56 h-80 rounded-lg  object-cover"/>

        <div className="flex gap-2">
          {gameplays.map((img,i)=>(
            <img key={i} src={img} className="w-20 h-20 rounded  object-cover"/>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full md:w-2/3">
        <h1 className="text-2xl font-bold font-motserrat">{titulo}</h1>
        <p className=" font-motserrat"><b>Consolas:</b> {consolas}</p>
        <p className=" font-motserrat"><b>Tipo:</b> {tipo}</p>

        <textarea readOnly value={descripcion} className="bg-night text-white border border-Lavanda rounded p-2 h-64 resize-none font-motserrat"/>
      </div>

    </div>
  </div>
);

}
