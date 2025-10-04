import MoviePage from './pages/MoviePage';
import './App.css'

function App() {
  console.log(import.meta.env.VITE_TMDB_KEY);
  return (
    <>
      <MoviePage></MoviePage>
    </>
  );
}

export default App;
