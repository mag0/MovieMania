import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const SerieDetail = () => {
    const { id } = useParams();
    const [serie, setSerie] = useState(null);
    const [video, setVideo] = useState(null);
    const [credits, setCredits] = useState(null);
    const [images, setImages] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchAll = async () => {
            const [resSerie, resVideo, resCredits, resImages, resReviews] = await Promise.all([
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=es-ES`),
                fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=es-ES`),
                fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}&language=es-ES`),
                fetch(`https://api.themoviedb.org/3/tv/${id}/images?api_key=${API_KEY}`),
                fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${API_KEY}`)
            ]);

            const dataSerie = await resSerie.json();
            const dataVideo = await resVideo.json();
            const dataCredits = await resCredits.json();
            const dataImages = await resImages.json();
            const dataReviews = await resReviews.json();

            setSerie(dataSerie);
            setCredits(dataCredits);
            setImages(dataImages.backdrops.slice(0, 4));
            setReviews(dataReviews.results.slice(0, 6));

            const trailer = dataVideo.results.find(v => v.type === "Trailer" && v.site === "YouTube");
            setVideo(trailer);
        };

        fetchAll();
    }, [id]);

    if (!serie) return <p className="text-white p-4">Cargando...</p>;

    const cast = credits?.cast?.slice(0, 3);

    return (
        <div className="p-4 text-white max-w-4xl mx-auto space-y-8">
            {/* Imagen principal */}
            <img
                src={`https://image.tmdb.org/t/p/w780${serie.poster_path}`}
                alt={serie.name}
                className="rounded shadow-lg mx-auto h-96"
            />

            {/* Título y descripción */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold">{serie.name}</h1>
                <div className="flex justify-center flex-wrap gap-2">
                    {serie.genres.map(g => (
                        <span key={g.id} className="bg-blue-700 px-3 py-1 rounded-full text-sm">{g.name}</span>
                    ))}
                </div>
                <p className="text-gray-300 mt-4">{serie.overview}</p>
            </div>

            {/* Datos técnicos */}
            <div className="text-sm text-gray-400 space-y-1">
                <p><strong>Temporadas:</strong> {serie.number_of_seasons}</p>
                <p><strong>Episodios:</strong> {serie.number_of_episodes}</p>
                <p><strong>Idioma original:</strong> {serie.original_language.toUpperCase()}</p>
                <p><strong>Estado:</strong> {serie.status}</p>
                <p><strong>Puntuación:</strong> ⭐ {serie.vote_average}</p>
                {cast && <p><strong>Elenco:</strong> {cast.map(p => p.name).join(", ")}</p>}
                {video && (
                    <p className="mt-2">
                        <a
                            href={`https://www.youtube.com/watch?v=${video.key}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                        >
                            Ver tráiler en YouTube
                        </a>
                    </p>
                )}
            </div>

            {/* Galería */}
            {images.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Galería</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={`https://image.tmdb.org/t/p/w300${img.file_path}`}
                                alt={`Escena ${i + 1}`}
                                className="rounded shadow"
                            />
                        ))}
                    </div>
                </div>
            )}

            {reviews.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Reseñas de usuarios</h2>
                    <div className="space-y-6">
                        {reviews.map((r, i) => (
                            <div key={i} className="flex gap-4 bg-gray-800/60 p-4 rounded-lg shadow-sm">
                                {/* Avatar */}
                                <div
                                    className="w-10 h-10 rounded-full bg-center bg-cover flex-shrink-0"
                                    style={{
                                        backgroundImage: `url(https://ui-avatars.com/api/?name=${encodeURIComponent(r.author)}&background=random)`
                                    }}
                                ></div>

                                {/* Contenido */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold text-white">{r.author}</p>
                                            <p className="text-xs text-gray-400">Hace poco</p>
                                        </div>
                                        <div className="flex gap-0.5 text-yellow-400">
                                            {Array.from({ length: 5 }, (_, j) => (
                                                <span key={j} className="material-symbols-outlined text-base">
                                                    ⭐
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-200 leading-relaxed">
                                        {r.content.length > 300 ? r.content.slice(0, 300) + "..." : r.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SerieDetail;