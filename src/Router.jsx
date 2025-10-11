import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LayoutApp from './layout/LayoutApp.jsx'
import Movies from './pages/Movies.jsx';
import Series from './pages/Series.jsx';
import MovieDetail from './pages/MovieDetail.jsx';
import SerieDetail from './pages/SerieDetail.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/serie/:id" element={<SerieDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


