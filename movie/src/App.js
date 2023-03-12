import { useState } from 'react';
import './App.css';
import AddMovie from './Component/AddMovie';
import MovieCard from './Component/MovieCard';
import MovieList from './Component/MovieList';
import Search from './Component/Search';
import { moviesData } from './Data';


function App() {
  const [movies, setMovies] = useState(moviesData);
  const handleAdd = (newMovie) => 
  setMovies([...movies,newMovie])
  const [text , setText] =  useState("");
  const handleDelete = (id) =>{ const delArr = [...movies].filter((film)=> film.id !== id); setMovies(delArr);}
  const handleEdit =(theMovie) =>setMovies(movies.map(el=>el.id===theMovie.id?{...el,...theMovie}:el))
  const handleText = (e)=> setText (e.target.value)
  return (
    <div className="App">
      <Search  text={text} handleText={handleText}/>
      <MovieList moviee ={movies} handleDelete={handleDelete} handleEdit={handleEdit} />
      <AddMovie handleAdd={handleAdd} />
     
    </div>
  );
}

export default App;
