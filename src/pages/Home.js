import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
