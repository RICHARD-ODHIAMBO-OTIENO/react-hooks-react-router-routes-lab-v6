import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(response => response.json())
      .then(data => setDirectors(data))
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
        <h1>Directors Page</h1>
        {directors.map(director => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map(movie => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
