import { useState, useEffect } from "react";
import '../css/TrendingMovies.css';
import Movies from './Movies.jsx';
import Series from './Series.jsx';

const MoviesList = () => {
    const [trendingMoviesList, setTrendingMoviesList] = useState([]);
    const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);
    const [upcomingMoviesList, setUpcomingMoviesList] = useState([]);
    const [trendingTvList, setTrendingTvList] = useState([]);
    const [topRatedTvList, setTopRatedTvList] = useState([]);
    const [upcomingTvList, setUpcomingTvList] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY;

    const getMovie = (url, setter) => {
        fetch(url)
            .then(res => res.json())
            .then(json => setter(json.results));
    };

    useEffect(() => {
        getMovie(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, setTrendingMoviesList);
        getMovie(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`, setTopRatedMoviesList);
        getMovie(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`, setUpcomingMoviesList);
        getMovie(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`, setTrendingTvList);
        getMovie(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`, setTopRatedTvList);
        getMovie(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`, setUpcomingTvList);
    }, [apiKey]);

    const movieCategories = [
        {name: "Trending movies", list: trendingMoviesList},
        {name: "Popular movies", list: topRatedMoviesList},
        {name: "Upcoming movies", list: upcomingMoviesList}
    ]

    const seriesCategories = [
        {name: "Trending series", list: trendingTvList},
        {name: "Popular series", list: topRatedTvList},
        {name: "Upcoming series", list: upcomingTvList}
    ]

    return (
        <div style={{marginBottom:'18em'}}>
            {
                movieCategories.map((categories, index)=>(
                    <Movies key={index} name={categories.name} lista={categories.list}></Movies>
                ))
            }

            {
                seriesCategories.map((categories, index)=>(
                    <Series key={index} name={categories.name} lista={categories.list}></Series>
                ))
            }
        </div>
    );
}

export default MoviesList;
