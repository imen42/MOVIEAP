import React from 'react'
import { moviesData } from '../Data'
import EditMov from './EditMov'
import StarRating from './StarRating'
import {Link} from 'react-router-dom'

const MovieCard = ({moviez,handleDelete,handleEdit}) => {
  return (
    <div className='carta'>
  <StarRating rating={moviez.rating}/>
  <img src={moviez.picture} alt={moviez.name }  height="450px" />
  <h3>{moviez.name}</h3>
  <h3>{moviez.date}</h3>
  <button onClick={() => handleDelete(moviez.id)} className='FASAKH'>Delete</button>
  <EditMov moviez={moviesData} handleEdit={handleEdit} imen={moviez}/>
   <Link to={`/moviedetails/${moviez.id}`}><button>description</button></Link>
    </div>
  )
}

export default MovieCard