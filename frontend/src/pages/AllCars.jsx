import React from "react";

import { Link } from "react-router-dom"

import Table from 'react-bootstrap/Table'

const AllCars = ({ cars }) => {
  return (
      <Table striped bordered>
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
                  <td>{car.model}<span style={{fontSize: 10, paddingInline: 5}}>miles:{car.mileage}</span></td>
                  <td>{car.make}</td>
                  <td>{car.year}</td>
                  <td><Link to={`/cars/${car.id}`}>
                    view
                  </Link></td>
                </tr>
              );
            })}
          </tbody>
      </Table>
  );
};

export default AllCars;
