import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Btn from '../components/BtnBack';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(json => setMovie(json));
  }, [id, apiKey]);

  if (!movie) return <div></div>;

  return (
  <div style={{marginBottom:'18em'}}>
    <div className="flex flex-col items-start bg-gray-800 rounded-lg shadow md:flex-row md:max-w-2xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-4 my-8 p-4">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h1 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{movie.title}</h1>
        <p className="mb-3 font-normal dark:text-gray-400">{movie.overview}</p>
        <p className="text-sm text-gray-400">Release date: {movie.release_date}</p>
        <p className="text-sm text-gray-400">Duration: {movie.runtime} minutes</p>
        <p className="text-sm text-gray-400">Director: {movie.director}</p>
        <p className="text-sm text-gray-400">Popularity: {movie.popularity}</p>
        <p className="text-sm text-gray-400">Original language: {movie.original_language}</p>
      </div>
    </div>
    <Btn></Btn>
  </div>

  );
};

export default MovieDetails;


