import { Navbar } from "../layout";
import { Footer } from "../layout";
import ListaTarjetasJuegos from "./ListaTarjetasJuegos";

export default function Home() {
  return (
    <div >
      <Navbar/>
    <ListaTarjetasJuegos/>
    <Footer/>
    </div>
  );
}
