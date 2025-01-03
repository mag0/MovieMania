import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Paginacion from '../components/Paginacion.jsx';

const AllMovies = () => {

    const [trendingMovieList, setTrendingMovieList] = useState([]);
    const { page } = useParams();
    const currentPage = Number(page);

    const apiKey = import.meta.env.VITE_API_KEY;

    const getMovie = (url, setter) => {
        fetch(url)
            .then(res => res.json())
            .then(json => setter(json.results));
    };

    useEffect(() => {
      getMovie(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`, setTrendingMovieList);
    }, [apiKey, page]);

  return (
    <div style={{marginBottom:'20em'}}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {
            trendingMovieList.map((movie, index) => (
                <Link key={index} to={`/movie/${movie.id}`} classNameName="flex-shrink-0 flex justify-center">
                    <img
                        className="h-auto mt-8 mb-8 w-100 rounded-lg cursor-pointer"
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500?text=Image+Not+Available'}
                        alt={movie.original_title}
                    />
                </Link>
            ))
        }
        </div>
        
        <Paginacion tipo='allmovies' currentPage={currentPage}></Paginacion>

    </div>
  )
}

export default AllMovies