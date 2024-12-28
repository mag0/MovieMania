import { useState, useEffect } from "react";
import '../css/TrendingMovies.css';
import Movies from './Movies.jsx';

const MoviesList = () => {
    const [trendingMoviesList, setTrendingMoviesList] = useState([]);
    const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);
    const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);

    const getMovie = (url, setter) => {
        fetch(url)
            .then(res => res.json())
            .then(json => setter(json.results));
    };

    useEffect(() => {
        getMovie("https://api.themoviedb.org/3/movie/popular?api_key=b497b4e518aaec91a54d2516bec23c68", setTrendingMoviesList);
        getMovie("https://api.themoviedb.org/3/movie/top_rated?api_key=b497b4e518aaec91a54d2516bec23c68", setTopRatedMoviesList);
        getMovie("https://api.themoviedb.org/3/movie/upcoming?api_key=b497b4e518aaec91a54d2516bec23c68", setUpcomingMoviesList);
    }, []);

    const movieCategories = [
        {name: "Trending movies", list: trendingMoviesList},
        {name: "Popular movies", list: topRatedMoviesList},
        {name: "Upcoming movies", list: upcomingMoviesList}
    ]

    return (
        <>
            {
                movieCategories.map((categories, index)=>(
                    <Movies key={index} name={categories.name} lista={categories.list}></Movies>
                ))
            }
        </>
    );
}

export default MoviesList;
