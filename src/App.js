import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';



const App = () => {
  const [film, setFilms] = useState([]);

  return (
    <div className="App">
      <h1 className="title">Studio Ghibli Collection</h1>

      <MovieInfo film={film} />
      <MovieList setter={setFilms} />
      
      

    </div>
  );
}

export default App;
