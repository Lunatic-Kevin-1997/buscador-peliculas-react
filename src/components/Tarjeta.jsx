import {useState} from 'react';
import './Tarjeta.css'
function Tarjeta ({titulo, descripcion, poster, onClickTarjeta}) {
    const [likes, setLikes] = useState(0);
    const [errorImagen, setErrorImagen] = useState(false);

    return(
        <div 
            className='tarjeta-pelicula'
            onClick={() => onClickTarjeta({ Title: titulo, Year: descripcion, Poster: poster})}
            style={{cursor: 'pointer'}}
        >
            {errorImagen || poster === 'N/A' ? (
                <div className='caja-error'>
                   <span>🎬</span> 
                </div>
            ) : (
            <img 
                src={poster} 
                alt={`Póster de ${titulo}`} 
                className='tarjeta-imagen' 
                onError={() => setErrorImagen(true)}
            />
            )}

            <h2>{titulo}</h2>
            <p style={{color: '#d2dae2'}}>🗓️Año:{descripcion}</p>
            <button className="btn-like" onClick={(e) => {
                e.stopPropagation();
                setLikes(likes + 1);
            }}>❤️ Me gusta ({likes})</button>
        </div>
    )
}

export default Tarjeta;