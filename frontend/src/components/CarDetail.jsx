import React, { useState, useEffect } from "react";

import { useNavigate, useParams, Link } from "react-router-dom";

import Notes from 'components/Notes'
import Maintenance from 'components/Maintenance'
import CarAPI from "utils/BackendAPIS/CarBackend";
import NoteAPI from "utils/BackendAPIS/NoteBackend";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CarDetail = ({ cars, notes, setNotes, maintenances, setMaintenances }) => {
  const navigate = useNavigate();
  const { carId } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    let fetchCarDetails = async () => {
      let res = await CarAPI.get(`/${carId}/`).catch((err) => console.log(err));
      setCar(res.data);
    };
    fetchCarDetails();
  }, []);

  const updateState = (id) => setCar(cars.filter((car) => car.id !== id));

  const deleteCar = (carId) => {
    CarAPI.delete(`/${carId}/delete`).then((res) => updateState(carId));
    navigate("/cars");
    window.location.reload();
  };

  // https://yizhiyue.me/2019/04/09/an-elegant-way-to-solve-adding-commas-between-every-3-digits-problem-in-javascript
  //       .toString() // turns numbers into strings
  //       .split() // every digit becomes an element in an array
  //       .reverse() // reverse the array so that we can start process the number from the least digit
  //       .map((digit, index) // map every digit from the array.
  //                           // If the index is a multiple of 3 and it's not the least digit,
  //                           // that is the place we insert the comma behind.
  //       .reverse() // reverse back the array so that the digits are sorted in correctly display order
  //       .join() // transform the array back to the string
  //  let addComma = (num) => num.toString().split('').reverse().map((digit, index) => index != 0 && index % 3 === 0 ? `${digit},` : digit).reverse().join('')

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title>
        {car.year} {car.make} {car.model}
      </Card.Title>
      <Card.Subtitle>miles:{car.mileage}</Card.Subtitle>
      <div>
        <Button type="submit" onClick={() => deleteCar(car.id)}>
          Delete
        </Button>
        <Link to={`/cars/${carId}/edit`}>
          <Button type="submit">Edit</Button>
        </Link>
      </div>
      <div>
        <Notes notes={notes} setNotes={setNotes}/>
      </div>
      <div>
          <Maintenance maintenances={maintenances} setMaintenances={setMaintenances} />
      </div>
    </Card>
  );
};

export default CarDetail;
