import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from './components/MoviesList.jsx';
import Header from './components/Header.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import Series from './pages/Series';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </Router>
  );
}

export default App;


