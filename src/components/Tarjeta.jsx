import {useState} from 'react';
import './Tarjeta.css'
function Tarjeta ({titulo, descripcion, poster}) {
    const [likes, setLikes] = useState(0);
    const [errorImagen, setErrorImagen] = useState(false);
    const darLike = () => {
        setLikes(likes + 1);
    }

    return(
        <div className='tarjeta-pelicula'>
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
            <button className="btn-like" onClick={darLike}>❤️ Me gusta ({likes})</button>
        </div>
    )
}

export default Tarjeta;