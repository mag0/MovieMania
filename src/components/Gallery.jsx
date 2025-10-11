import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Gallery = ({ items = [], type = "movie" }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {items.map((item) => (
                <div key={item.id} className="flex justify-center">
                    <Link to={`/${type}/${item.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            alt={item.title || item.name}
                            className="rounded shadow hover:scale-105 transition-transform duration-200"
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};

Gallery.propTypes = {
    items: PropTypes.array.isRequired,
    type: PropTypes.oneOf(["movie", "serie"]) // ← corregido
};

export default Gallery;
