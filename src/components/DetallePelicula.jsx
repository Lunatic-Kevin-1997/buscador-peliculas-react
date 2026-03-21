import './DetallePelicula.css';

function DetallePelicula ({pelicula, onClose}){
    if(!pelicula) return null;

    const handleOverlayClick = (e) =>  {
        if(e.target.className === 'modal-overlay'){
            onClose();
        }
    }


return(
    <div className='modal-overlay' onClick={handleOverlayClick}>
        <div className='modal-content'>
            <button className='btn-cerrar' onClick={onClose}>&times;</button>
            <img 
                src={pelicula.Poster === 'N/A' ? 'https://placehold.co/200x300?text=Sin+Poster' : pelicula.Poster} 
                alt={pelicula.Title}
                className='modal-poster'
            />
            <h2>{pelicula.Title}</h2>
            <p><strong>🗓️ Año:</strong>{pelicula.Year}</p>
            <p style={{fontStyle: 'italic', marginTop: '20px', color: '#aaa'}}>
                Próximamente más detalles....
            </p>
        </div>
    </div>
    )
};
export default DetallePelicula;