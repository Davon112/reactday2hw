import { useState } from "react";
function MoviesList() {
    const [movieId, setMovieId] = useState(null)
    const [movies, setMovies] = useState([
        {
        id: 1,
        name: 'Bad Boys',
        released: 1995,
        details: 'Two hip detectives protect a witness to a murder while investigating a case of stolen heroin from the evidence storage room from their police precinct',
        rating: 6.8 
        },
        {
        id: 2,
        name: 'Friday',
        released: 1995,
        details: 'Its Friday, and Craig and Smokey must come up with $200 they owe a local bully or there wont be a Saturday',
        rating: 7.2
        },
        {
        id: 3,
        name: 'Blade',
        released: 1995,
        details: 'A half-vampire, half-mortal man becomes a protector of the mortal race, while slaying evil vampires.',
        rating: 7.2
        },
        {
        id: 4,
        name: 'Hardball',
        released: 2001,
        details: 'A gambling addict and ticket scalper living an aimless life reluctantly agrees to coach a Little League team from the Chicago projects as part of a loan agreement',
        rating: 6.4
        }  
    ])
    
    function updateMovieId(id){
        setMovieId(id)
    }

    function handleRemove(index){
      const updatedMovies = [...movies]
      console.log(updatedMovies, index)
      updatedMovies.splice(index, 1)
      console.log(currentMovies)
      setMovies(updatedMovies);

    }


    

    
  return (
    <div>
      <h3>Movies:</h3>
      <ul>
      {movies.map((movie, index) => (
                    <div key={movie.id}>
                        <li>Name: {movie.name}</li>
                        <button onClick={() => updateMovieId(movie.id)}>Details</button>
                        <button onClick={() => handleRemove(index)}>X</button>
                        {movie.id === movieId && (
                            <ul>
                                <li>Released: {movie.released}</li>
                                <li>Details: {movie.details}</li>
                                <li>Rating: {movie.rating}</li>
                            </ul>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default MoviesList;