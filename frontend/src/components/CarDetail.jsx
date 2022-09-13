import React, { useState, useEffect } from "react";

import { useNavigate, useParams, Link } from "react-router-dom";

import API from "utils/BackendAPI";

const CarDetail = ({ cars }) => {
  const navigate = useNavigate();
  const { carId } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    API.get(`/${carId}/`).then((res) => setCar(res.data));
  }, []);

  const updateState = (id) => setCar(cars.filter(car => car.id !== id));

  const deleteCar = (carId) => {
    API.delete(`/${carId}/delete`).then((res) => updateState(carId));
    navigate("/cars");
  };

  //   // function got from https://yizhiyue.me/2019/04/09/an-elegant-way-to-solve-adding-commas-between-every-3-digits-problem-in-javascript
  //   const addComma = (num) => {
  //     if (num === null) return;

  //     return (
  //       num
  //         .toString() // transform the number to string
  //         .split("") // transform the string to array with every digit becoming an element in the array
  //         .reverse() // reverse the array so that we can start process the number from the least digit
  //         .map((digit, index) =>
  //           index != 0 && index % 3 === 0 ? `${digit},` : digit
  //         ) // map every digit from the array.
  //         // If the index is a multiple of 3 and it's not the least digit,
  //         // that is the place we insert the comma behind.
  //         .reverse() // reverse back the array so that the digits are sorted in correctly display order
  //         .join("")
  //     ); // transform the array back to the string
  //   }

  return (
    <div>
      <img src={car.image} alt={car.model} />
      <h1>
        {car.year} {car.make} {car.model}
      </h1>
      {/* <h2>miles:{addComma(car.mileage)}</h2> */}
      <div>
        <button type="submit" onClick={() => deleteCar(car.id)}>
          Delete
        </button>
        <Link to={`/cars/${carId}/edit`}><button type="submit" >
          Edit  
        </button></Link>
      </div>
    </div>
  );
};

export default CarDetail;
