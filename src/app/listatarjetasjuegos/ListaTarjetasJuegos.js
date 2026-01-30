"use client"
import Link from "next/link"

const array = [
  { id: 1, nombre: "Minecraft", src: "minecraft.jpeg" },
  { id: 2, nombre: "Fortnite", src: "fornite.png" },
  { id: 3, nombre: "GTA VI", src: "gta.jpeg" },
  { id: 4, nombre: "FC 26", src: "fc26.jpg" },
  { id: 5, nombre: "Pokemon GO", src: "pokemongo.jpg" },
  { id: 6, nombre: "Dragon Ball Z: Budokai Tenkaichi 3", src: "tenkaichi.png" },
  { id: 7, nombre: "Inazuma Eleven", src: "inazumaeleven.jpg" },
  { id: 8, nombre: "E-Football", src: "efootball.jpg" }
]

export default function ListaTarjetasJuegos() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {array.map((juego) => (
          <Juego key={juego.id} objeto={juego} />
        ))}
      </div>

      <div className="flex justify-center gap-4 sm:gap-12 mt-8 flex-wrap">
        <button className="px-4 py-2 bg-white text-black rounded hover:bg-Lavanda hover:text-white transition">Prev.</button>
        <button className="px-4 py-2 bg-white text-black rounded hover:bg-Lavanda hover:text-white transition">1</button>
        <button className="px-4 py-2 bg-white text-black rounded hover:bg-Lavanda hover:text-white transition">2</button>
        <button className="px-4 py-2 bg-white text-black rounded hover:bg-Lavanda hover:text-white transition">3</button>
        <button className="px-4 py-2 bg-white text-black rounded hover:bg-Lavanda hover:text-white transition">Siguiente</button>
      </div>
    </div>
  )
}

function Juego({ objeto }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-4 hover:scale-105 transition">
  <Link href={`/vistajuego`} className="w-full flex flex-col items-center">
    <img src={objeto.src} alt={objeto.nombre} className="w-4/5 h-72 sm:h-80 md:h-96 lg:h-[400px] object-contain rounded-t-lg" />
    <p className="w-full -mt-1 text-center font-medium text-gray-800">
      {objeto.nombre}
    </p>
  </Link>
</div>
  )
}
