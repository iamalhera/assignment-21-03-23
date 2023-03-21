import React from 'react'
import SingleCard from './SingleCard'

const Main = ({ data, isLoading }) => {
  return (
    <div className="container-main">
      {
        data.map((item) => {
          return (
            <div key={item.id}>
              <SingleCard item={item} />
            </div>
          )
        })
      }

    </div>
  )
}

export default Main