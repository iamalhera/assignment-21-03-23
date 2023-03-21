import React from 'react'

const SingleCard = ({item}) => {
  return (
    <div className="card">
        <div className="card-image">
            <img src={item.avatar} alt={item.first_name} />
        </div>
        <div className="card-details">
            <h2>{item.first_name} {item.last_name}</h2>
            <p>{item.email}</p>
        </div>
    </div>
  )
}

export default SingleCard