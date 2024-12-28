import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(json => setMovie(json));
  }, [id, apiKey]);

  if (!movie) return <div></div>;

  return (
  <>
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
    <div className="flex justify-end mx-4 my-6">
      <button 
        onClick={() => navigate(-1)} 
        className="px-3 py-2 bg-red-800 text-white rounded hover:bg-red-900 text-base"
      >
        Back
      </button>
    </div>
  </>

  );
};

export default MovieDetails;


