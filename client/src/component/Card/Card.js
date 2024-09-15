import React from 'react'
import "./Card.css"

function Card({cardImage,cardDescription}) {
  return (
    <div className='card-container'>
        <img className='card-img' src={cardImage} alt='card-img' />
        <p className='cardDescription'>{cardDescription}</p>

    </div>
  )
}

export default Card