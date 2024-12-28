import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/ScrollMovies.css'

const Movies = ({ name, lista }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = React.createRef();

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 600; // Cantidad de desplazamiento en píxeles
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
      setScrollPosition(scrollPosition - scrollAmount);
    } else {
      container.scrollLeft += scrollAmount;
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <>
      <h2 className='m-4'>{name}</h2>
      <div className="relative flex items-center">
        <button onClick={() => scroll('left')} className="absolute left-0 z-10 text-white">
          ◀
        </button>
        <div ref={containerRef} className="flex overflow-x-auto m-4 scroll-container">
          {lista.map((movie, index) => (
            <Link key={index} to={`/movie/${movie.id}`} className="flex-shrink-0">
              <img
                id="imagen-movie"
                className="mt-8 mb-8 w-64 cursor-pointer"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            </Link>
          ))}
        </div>
        <button onClick={() => scroll('right')} className="absolute right-0 z-10 text-white">
          ▶
        </button>
      </div>
    </>
  );
};

export default Movies;

