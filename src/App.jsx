import "./App.css";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/*sección superior : */}
      <section
        className="seccion-superior"
        style={{ backgroundImage: `url('./imagenes/fondo-superior.jpg')` }}
      >
        <div className="contenido-hero">
          <button className="btn-principal">Ver colección</button>
          <h1>
            Elegancia <br /> única
          </h1>
        </div>
      </section>

      {/* Sección Inferior */}
      <section
        className="seccion-inferior"
        style={{ backgroundImage: `url('./imagenes/fondo-inferior.jpg')` }}
      >
        <div className="productos-container">
          {/* Card 1 */}
          <ProductCard
            nombre="Noir Abeille"
            precio="1400€"
            imagenUrl="/imagenes/broche1.png"
          />

          {/* Card 2 */}
          <ProductCard
            nombre="Noir Abeille"
            precio="2800€"
            imagenUrl="/imagenes/broche2.png"
          />

          {/* Card 3 */}
          <ProductCard
            nombre="Noir Abeille"
            precio="1400€"
            imagenUrl="/imagenes/broche3.png"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
