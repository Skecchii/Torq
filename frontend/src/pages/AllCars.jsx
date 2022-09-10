import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllCars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000')
        .then((res) => {
            setCars(res.data)
        })
    }, [])
    console.log(cars)


  return (
    <div>
        {cars.map(car => car.model)}
    </div>
  )
}

export default AllCars