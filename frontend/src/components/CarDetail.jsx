import React, { useState, useEffect } from "react";

import { useNavigate, useParams, Link } from "react-router-dom";

import API from "utils/BackendAPI";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CarDetail = ({ cars }) => {
  const navigate = useNavigate();
  const { carId } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    API.get(`/${carId}/`).then((res) => setCar(res.data)).catch((err) => console.error(err))
  }, []);

  const updateState = (id) => setCar(cars.filter(car => car.id !== id))

  const deleteCar = (carId) => {
    API.delete(`/${carId}/delete`).then((res) => updateState(carId))
    navigate("/cars")
    window.location.reload()
  };

  // add comma from https://yizhiyue.me/2019/04/09/an-elegant-way-to-solve-adding-commas-between-every-3-digits-problem-in-javascript
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
        <Button type="submit" onClick={() => deleteCar(car.id)}>Delete</Button>
        <Link to={`/cars/${carId}/edit`}>
          <Button type="submit">Edit</Button>
        </Link>
      </div>
    </Card>
  );
};

export default CarDetail;
