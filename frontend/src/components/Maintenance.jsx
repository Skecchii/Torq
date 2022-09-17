import React, { useState, useEffect } from 'react'

const Maintenance = ({ maintenances, setMaintenances }) => {




  return (
    <div>
        {maintenances.map(m => {
            return (
                <ul key={m.id} style={{listStyle: 'none'}}>
                    <li>engine oil <span>{m.engine_oil}</span></li>
                    <li>transmission oil <span>{m.transmission_oil}</span></li>
                    <li>differential oil <span>{m.differential_oil}</span></li>
                    <li>coolant <span>{m.coolant}</span></li>
                    <li>brake fluid <span>{m.brake_fluid}</span></li>
                    <li>brake pads <span>{m.brakepads}</span></li>
                    <li>brake rotors <span>{m.brake_rotor}</span></li>
                    <li>engine air filter <span>{m.engine_air_filter}</span></li>
                    <li>cabin air filter <span>{m.cabin_air_filter}</span></li>
                    <li>fuel filter <span>{m.fuel_filter}</span></li>
                    <li>tires <span>{m.tires}</span></li>
                </ul>
            )
        })}
    </div>
  )
}

export default Maintenance