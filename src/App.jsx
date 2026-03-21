import { useState, useEffect } from 'react';
import Tarjeta from './components/Tarjeta';
import DetallePelicula from './components/DetallePelicula';
import './App.css';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const buscarPeliculas = async (termino) => {
    setCargando(true);
    const url = `https://www.omdbapi.com/?apikey=695e16b9&s=${termino}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if(datos.Search){
      setPeliculas(datos.Search);
    } else {
      setPeliculas([]);
    }
    setCargando(false);
  };

  useEffect(() => {
    buscarPeliculas('Avengers');
  }, []);

  return (
    <div className="contenedor-app">
      <h1 className="titulo-app">¡Películas Favoritas en React!</h1>
      
      <div className="zona-buscador">
        <input 
          type="text"
          placeholder="Buscar película (ej. Batman)..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="input-busqueda"
        />
        <button 
          onClick={() => buscarPeliculas(busqueda)}
          className="btn-buscar"  
        >
          Buscar 🔍
        </button>
      </div>

      {cargando ? (
        <h2 style={{color: '#555'}}>⏳ Buscando películas...</h2>
      ) : peliculas.length > 0 ? (      
        <div className="grilla-peliculas">
          {peliculas.map((pelicula, index) => (
            <Tarjeta
              key={`${pelicula.imdbID}-${index}`}
              titulo={pelicula.Title}
              descripcion={pelicula.Year}
              poster={pelicula.Poster}
              onClickTarjeta={() => setPeliculaSeleccionada(pelicula)}
            />
          ))}
        </div>
      ) : (
        <h2 style={{color: '#d9534f'}}>
          Ups, no encontramos ninguna película con ese nombre. Intente de nuevo.
        </h2>
      )}

      {/* Renderizado del Modal */}
      {peliculaSeleccionada && (
        <DetallePelicula
          pelicula={peliculaSeleccionada}
          onClose={() => setPeliculaSeleccionada(null)}
        />
      )}
    </div>
  );
}

export default App;