import React, { useState, useEffect} from 'react'

import Navbar from 'components/Navbar'
import NewCar from 'components/NewCar'
import CarDetail from 'components/CarDetail'
import CarEdit from 'components/CarEdit'
import AllCars from 'pages/AllCars'

import API from 'utils/BackendAPI'
import Year from 'utils/CarAPI/Year'
import Make from 'utils/CarAPI/Make'
import Model from 'utils/CarAPI/Model'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [cars, setCars] = useState([])
  const [years, setYears] = useState([])
  const [makes, setMakes] = useState([])
  const [models, setModels] = useState([])

  useEffect(() => {
      API.get('').then((res) => setCars(res.data))

  }, [])

    
  return (
    <>
     
      <Router>
      <Navbar />
        <Routes>
          <Route path='/cars' element={<AllCars cars={cars} setCars={setCars}/>} />
          <Route path='/cars/create' element={<NewCar cars={cars} setCars={setCars}/>} />
          <Route path='/cars/:carId' element={<CarDetail cars={cars}/>} />
          <Route path='/cars/:carId/edit' element={<CarEdit setCars={setCars}/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
