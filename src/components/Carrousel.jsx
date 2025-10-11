import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PropTypes from "prop-types";

export const Carrousel = ({ title, items }) => {
    const [genres, setGenres] = useState([]);
    const api_key = import.meta.env.VITE_API_KEY;

    // Generar ID único válido para selector CSS
    const uniqueId = Math.random().toString(36).substring(2, 9);

    const prevButtonClass = `custom-prev-${uniqueId}`;
    const nextButtonClass = `custom-next-${uniqueId}`;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=es-ES`)
            .then((res) => res.json())
            .then((data) => setGenres(data.genres))
            .catch((err) => console.error(err));
    }, [api_key]);

    return (
        <>
            <h2 className="text-2xl font-bold dark:text-white mb-4">{title}</h2>
            <div className="relative group">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: `.${prevButtonClass}`,
                        nextEl: `.${nextButtonClass}`,
                    }}
                    spaceBetween={24}
                    slidesPerView="auto"
                    className="py-4"
                    style={{ paddingBottom: "2rem" }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            if (
                                swiper?.params?.navigation &&
                                swiper?.navigation &&
                                typeof swiper.navigation.init === "function" &&
                                typeof swiper.navigation.update === "function"
                            ) {
                                swiper.params.navigation.prevEl = `.${prevButtonClass}`;
                                swiper.params.navigation.nextEl = `.${nextButtonClass}`;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        }, 0);
                    }}
                >
                    {items.map((movie) => (
                        <SwiperSlide key={movie.id} style={{ width: "16rem" }} className="group">
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title || movie.name}
                                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-3">
                                <h3 className="font-bold dark:text-white truncate max-w-full">
                                    {movie.title || movie.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {genres
                                        .filter((genre) => movie.genre_ids.includes(genre.id))
                                        .map((filteredGenre) => filteredGenre.name)
                                        .join(", ")}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Botones únicos por carrusel */}
                <button
                    className={`${prevButtonClass} absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-50 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-label="Previous Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    className={`${nextButtonClass} absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black bg-opacity-50 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-label="Next Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </>
    );
};

Carrousel.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
};
