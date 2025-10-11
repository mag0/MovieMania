import { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar";
import Gallery from "../components/Gallery";
import Pagination from "../components/Pagination";
import PropTypes from "prop-types";

const Media = ({ type }) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const routeType = type === "tv" ? "serie" : "movie";
    const api_key = import.meta.env.VITE_API_KEY;
    const region = "AR"; // Cambiá si querés otra región

    useEffect(() => {
        setIsLoading(true);

        let endpoint = "";
        const base = `https://api.themoviedb.org/3`;

        if (query) {
            endpoint = `${base}/search/${type}?api_key=${api_key}&language=es-ES&query=${query}&page=${page}`;
        } else {
            endpoint = `${base}/discover/${type}?api_key=${api_key}&language=es-ES&page=${page}`;

            if (genre) endpoint += `&with_genres=${genre}`;
            if (platform) endpoint += `&with_watch_providers=${platform}&watch_region=${region}`;
        }

        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                setItems(data.results);
                setTotalPages(Math.min(data.total_pages, 500));
                window.scrollTo({ top: 0, behavior: "smooth" });
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, [api_key, page, query, genre, platform, type]);

    return (
        <div className="space-y-6">
            <FilterBar
                onSearch={setQuery}
                onGenreChange={setGenre}
                onPlatformChange={setPlatform}
                type={type}
            />

            <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                {isLoading ? (
                    <div className="text-center text-gray-400 py-8">Cargando contenido...</div>
                ) : (
                    <Gallery items={items} type={routeType} />
                )}
            </div>

            <Pagination currentPage={page} onPageChange={setPage} totalPages={totalPages} />
        </div>
    );
};

Media.propTypes = {
    type: PropTypes.string.isRequired, // ✅ esto es lo correcto
};

export default Media;