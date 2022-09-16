import React, { useState, useEffect} from 'react'

import NavBar from 'components/NavBar'
import NewCar from 'components/NewCar'
import CarDetail from 'components/CarDetail'
import CarEdit from 'components/CarEdit'
import AllCars from 'pages/AllCars'

import API from 'utils/BackendAPI'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [cars, setCars] = useState([])

  useEffect(() => {
    let fetchCarsData = async() => {
      let res = await API.get('').catch(err => console.log(err))
      setCars(res.data)
    }
    fetchCarsData()
  }, [])
 
  return (
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/cars' element={<AllCars cars={cars}/>} />
          <Route path='/cars/create' element={<NewCar cars={cars} setCars={setCars}/>} />
          <Route path='/cars/:carId' element={<CarDetail cars={cars}/>} />
          <Route path='/cars/:carId/edit' element={<CarEdit setCars={setCars}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
