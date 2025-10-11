import Hero from "../components/Hero";
import { Carrousel } from "../components/Carrousel";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
    const { popularMovies, popularSeries } = useOutletContext();

    return (
        <div>
            <Hero poster_path={popularMovies[0]?.poster_path} />
            <main className="mt-14">
                <Carrousel title="Películas Populares" items={popularMovies} />
                <Carrousel title="Series Populares" items={popularSeries} />

            </main>
        </div>
    )
}

export default Home;