import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const FilterBar = ({ onSearch, onGenreChange, onPlatformChange, type }) => {
    const [genres, setGenres] = useState([]);
    const [providers, setProviders] = useState([]);
    const api_key = import.meta.env.VITE_API_KEY;
    const region = "AR"; // Cambiá esto si querés otra región

    useEffect(() => {
        // Cargar géneros
        fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${api_key}&language=es-ES`)
            .then(res => res.json())
            .then(data => setGenres(data.genres))
            .catch(err => console.error(err));

        // Cargar plataformas
        fetch(`https://api.themoviedb.org/3/watch/providers/${type}?api_key=${api_key}&language=es-ES&watch_region=${region}`)
            .then(res => res.json())
            .then(data => setProviders(data.results))
            .catch(err => console.error(err));
    }, [api_key, type]);

    return (
        <div className="flex flex-wrap mt-6 items-center justify-center gap-4">
            <input
                type="text"
                placeholder={`Buscar ${type === "movie" ? "película" : "serie"}...`}
                className="bg-gray-900 text-white placeholder:text-gray-400 border border-gray-700 px-4 py-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => onSearch(e.target.value)}
            />

            <select
                className="bg-gray-900 text-white border border-gray-700 px-4 py-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => onGenreChange(e.target.value)}
            >
                <option value="">Todos los géneros</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>

            <select
                className="bg-gray-900 text-white border border-gray-700 px-4 py-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => onPlatformChange(e.target.value)}
            >
                <option value="">Todas las plataformas</option>
                {providers
                    .filter(p => p.logo_path) // opcional: solo los que tienen logo
                    .map((provider) => (
                        <option key={provider.provider_id} value={provider.provider_id}>
                            {provider.provider_name}
                        </option>
                    ))}
            </select>
        </div>
    );
};

FilterBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onGenreChange: PropTypes.func.isRequired,
    onPlatformChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};

export default FilterBar;