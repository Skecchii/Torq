import React, { useState, useEffect} from 'react'
import API from 'utils/BackendAPI'
import Navbar from 'components/Navbar'
import NewCar from 'components/NewCar'
import AllCars from 'pages/AllCars'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [cars, setCars] = useState([])

  useEffect(() => {
      API.get('')
      .then((res) => setCars(res.data))
  }, [])

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<AllCars cars={cars} setCars={setCars}/>} />
          <Route path='/create' element={<NewCar cars={cars} setCars={setCars}/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
