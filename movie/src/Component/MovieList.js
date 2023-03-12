import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({moviee,handleDelete,handleEdit} ) => {
  return (
    <div className='movie-list'>
       {moviee.map((moviee) => (
        <MovieCard moviez={moviee}  handleDelete={handleDelete} handleEdit={handleEdit}/>
        ) )
       } 
    </div>
  )
}

export default MovieList