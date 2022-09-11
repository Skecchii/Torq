import React from 'react'

const AllCars = ({ cars }) => {

  console.log(cars)
  return (
    <div>
      {cars.map((car) => {
        return (
        <h2 key={ car.id }>{car.year} {car.make} {car.model}</h2>
        )
      })}
    </div>
)
}

export default AllCars