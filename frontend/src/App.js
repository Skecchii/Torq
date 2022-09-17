import React, { useState, useEffect } from "react";

import NavBar from "components/NavBar";
import NewCar from "components/NewCar";
import CarDetail from "components/CarDetail";
import CarEdit from "components/CarEdit";
import AllCars from "pages/AllCars";

import CarAPI from "utils/BackendAPIS/CarBackend";
import NoteAPI from "utils/BackendAPIS/NoteBackend";
import MaintenanceAPI from "utils/BackendAPIS/Maintenance";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cars, setCars] = useState([]);
  const [notes, setNotes] = useState([]);
  const [maintenances, setMaintenances] = useState([]);

  useEffect(() => {
    let fetchNotesData = async () => {
      let res = await NoteAPI.get("").catch((err) => console.log(err));
      setNotes(res.data);
    };
    fetchNotesData();
  }, []);

  useEffect(() => {
    let fetchCarsData = async () => {
      let res = await CarAPI.get("").catch((err) => console.log(err));
      setCars(res.data);
    };
    fetchCarsData();
  }, []);

  useEffect(() => {
    let fetchMaintenanceData = async () => {
      let res = await MaintenanceAPI.get("").catch((err) => console.error(err));
      setMaintenances(res.data);
    };
    fetchMaintenanceData();
  }, []);


  console.log(maintenances)
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/cars" element={<AllCars cars={cars} />} />
          <Route
            path="/cars/create"
            element={<NewCar cars={cars} setCars={setCars} />}
          />
          <Route
            path="/cars/:carId"
            element={
              <CarDetail cars={cars} notes={notes} setNotes={setNotes} maintenances={maintenances} setMaintenances={setMaintenances}/>
            }
          />
          <Route
            path="/cars/:carId/edit"
            element={<CarEdit setCars={setCars} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
