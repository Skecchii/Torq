import React, { useState, useEffect } from 'react'

import API from 'utils/BackendAPI'
import {  useParams, useNavigate } from 'react-router-dom'

const CarEdit = ({ setCars}) => {

    const navigate = useNavigate()
    const { carId } = useParams()

    const initialState = {
        year: '',
        make: '',
        model: '',
        mileage: '',
        image: ''
    }
    
    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
        API.get(`/${carId}/`).then((res) => setFormData(res.data))
    }, [])
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        API.put(`/${carId}/update`, formData).then(res => {
            setFormData(initialState)
            setCars(res.data)
            navigate('/cars')
        })
    }

  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor='year'>Year</label>
        <select defaultValue={'DEFAULT'} value={formData.year} id='year' name='year' onChange={handleChange}>
            <option value='DEFAULT' disabled>Select Year</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
        </select>
    </div>
    <div>
        <label htmlFor='make'>Make</label>
        <select defaultValue={'DEFAULT'} value={formData.make} id='make' name='make' onChange={handleChange}>
            <option value='DEFAULT' disabled>Select Make</option>
            <option>Honda</option>
            <option>Mazda</option>
            <option>Toyota</option>
        </select>
    </div>
    <div>
        <label htmlFor='model'>Model</label>
        <select defaultValue={'DEFAULT'} value={formData.model} id='model' name='model' onChange={handleChange}>
            <option value='DEFAULT' disabled>Select Model</option>
            <option>Civic</option>
            <option>RX-7</option>
            <option>Tundra</option>
        </select>
    </div>
    <div>
        <label htmlFor='mileage'>Mileage</label>
        <input value={formData.mileage} id='mileage' name='mileage' type='number' onChange={handleChange}></input>
    </div>
    <div>
        <label htmlFor='image'>Image</label>
        <input value={formData.image} id='image' name='image' type='file' accept='image/png, image/jpeg' onChange={handleChange}></input>
    </div>
    <button type='submit'>Update Car</button>
</form>
  )
}

export default CarEdit