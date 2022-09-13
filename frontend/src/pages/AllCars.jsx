import React from "react";

import { Link } from "react-router-dom";

const AllCars = ({ cars }) => {
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => {
              return (
                <tr key={car.id}>
                  <td>{car.year}</td>
                  <td>{car.make}</td>
                  <td>{car.model}</td>
                  <td><Link to={`/cars/${car.id}`}>
                    view
                  </Link></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCars;
