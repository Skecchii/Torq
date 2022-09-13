import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import API from 'utils/BackendAPI'

const NewCar = ({ cars, setCars }) => {

const navigate = useNavigate()

const initialState = {
    year: '',
    make: '',
    model: '',
    mileage: '',
    image: ''
}

const addCar = (car) => {
    setCars([...cars, car])
}

const [formData, setFormData] = useState(initialState)

const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value})
}
const handleSubmit = (e) => {
    e.preventDefault()
    API.post('/create', formData).then(res => {
        setFormData(initialState)
        addCar(res.data)
        navigate('/cars')
    })
}

  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor='year'>Year</label>
        <select defaultValue={'DEFAULT'} id='year' name='year' onChange={handleChange}>
            <option value='DEFAULT' disabled>Select Year</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
        </select>
    </div>
    <div>
        <label htmlFor='make'>Make</label>
        <select defaultValue={'DEFAULT'} id='make' name='make' onChange={handleChange}>
            <option value='DEFAULT' disabled>Select Make</option>
            <option>Honda</option>
            <option>Mazda</option>
            <option>Toyota</option>
        </select>
    </div>
    <div>
        <label htmlFor='model'>Model</label>
        <select defaultValue={'DEFAULT'} id='model' name='model' onChange={handleChange}>
            <option value='DEFAULT' disabled>Select Model</option>
            <option>Civic</option>
            <option>RX-7</option>
            <option>Tundra</option>
        </select>
    </div>
    <div>
        <label htmlFor='mileage'>Mileage</label>
        <input id='mileage' name='mileage' type='number' onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor='image'>Image</label>
        <input id='image' name='image' type='file' accept='image/png, image/jpeg' onChange={handleChange}></input>
    </div>
    <button type='submit'>Add Car</button>
</form>

  )
}

export default NewCar