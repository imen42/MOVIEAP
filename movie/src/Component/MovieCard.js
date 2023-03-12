import React from 'react'
import { moviesData } from '../Data'
import EditMov from './EditMov'
import StarRating from './StarRating'

const MovieCard = ({moviez,handleDelete,handleEdit}) => {
  return (
    <div className='carta'>
  <StarRating rating={moviez.rating}/>
  <img src={moviez.picture} alt={moviez.name }  height="450px" />
  <h3>{moviez.name}</h3>
  <h3>{moviez.date}</h3>
  <button onClick={() => handleDelete(moviez.id)} className='FASAKH'>Delete</button>
  <EditMov moviez={moviesData} handleEdit={handleEdit} imen={moviez}/>
  
    </div>
  )
}

export default MovieCard