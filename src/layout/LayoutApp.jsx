import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react";


const LayoutApp = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
    const api_key = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=es-ES&page=1`)
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
            .catch(err => console.error(err));
    }, [api_key]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=es-ES&page=1`)
            .then(res => res.json())
            .then(data => setPopularSeries(data.results))
            .catch(err => console.error(err));
    }, [api_key]);

    return (
        <div className="p-6">
            <Header />
            <main>
                <Outlet context={{ popularMovies, popularSeries }} />
            </main>
        </div>
    )
}

export default LayoutApp