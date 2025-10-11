// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="relative h-96 w-full overflow-hidden rounded-lg mt-10">
                <img
                    src="https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
                    alt="Pelicula Destacada"
                    className="w-full h-full object-cover aspect-[16/9]"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-8 text-white items-end text-right">
                    <h1 className="text-4xl font-bold mb-4">Inception</h1>
                    <p className="max-w-xl mb-6">Sumérgete en un mundo donde los sueños controlan la realidad y cada pensamiento puede cambiarlo todo.</p>
                    <div>
                        <a href="https://www.youtube.com/watch?v=8hP9D6kZseM" target="_blank" rel="noopener noreferrer">
                            <button className="mr-4 rounded bg-primary px-6 py-2 font-semibold hover:bg-red-700 transition">
                                Ver Trailer
                            </button>
                        </a>

                        <Link to={"/movies/27205"}>
                            <button className="rounded border border-white px-6 py-2 font-semibold hover:bg-gray-400 hover:text-primary transition">
                                Más Información
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
// Hero.propTypes = {
//     poster_path: PropTypes.string.isRequired,
// };

export default Hero;
