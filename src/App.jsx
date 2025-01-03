import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import SeriesDetails from './pages/SeriesDetails.jsx';
import AllMovies from './pages/AllMovies.jsx';
import AllSeries from './pages/AllSeries.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/serie/:id" element={<SeriesDetails />} />
        <Route path="/allmovies/:page" element={<AllMovies />} />
        <Route path="/allseries/:page" element={<AllSeries />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


