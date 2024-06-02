import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => setError(error.message));
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {movie.genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
