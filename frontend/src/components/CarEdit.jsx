import React, { useState, useEffect } from 'react'

import {  useParams, useNavigate } from 'react-router-dom'

import API from 'utils/BackendAPI'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Make from 'utils/CarData/Make'
import Year from 'utils/CarData/Year'
import Model from 'utils/CarData/Model'

const CarEdit = ({ setCars}) => {

    const navigate = useNavigate()
    const { carId } = useParams()

    const initialState = {
        year: '',
        make: '',
        model: '',
        mileage: '',
        image: '',
    }
    
    const [formData, setFormData] = useState(initialState)

    let updateCar = async() => {
        API.put(`/${carId}/update`, formData).then(res => {
            setFormData(initialState)
            setCars(res.data)
            navigate('/cars')
        })
    }

    useEffect(() => {
        let fetchCarData = async() => {
            let res = await API.get(`/${carId}/`)
            setFormData(res.data)
        }
        fetchCarData()
    }, [])
    
    
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updateCar()
    }

    let modelArr = []
    Model.forEach(model => {
    if (!modelArr.includes(model)) {
        modelArr.push(model)
    }
})

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group>
        <Form.Label htmlFor='year'>Year</Form.Label>
        <Form.Select defaultValue={'DEFAULT'} value={formData.year} id='year' name='year' onChange={handleChange}>
            <option value='DEFAULT' disabled>Select Year</option>
            {Year.map((option, index) => {
                return (
                    <option key={index} value={option}>
                        {option}
                    </option>
                )
            })}
        </Form.Select>
    </Form.Group>
    <Form.Group>
        <Form.Label htmlFor='make'>Make</Form.Label>
        <Form.Select defaultValue={'DEFAULT'} value={formData.make} id='make' name='make' onChange={handleChange}>
            <option value='DEFAULT' disabled>Select Make</option>
            {Make.map((option,index) => {
                return (
                    <option key={index} value={option}>
                        {option}
                    </option>
                )
            })}
        </Form.Select>
    </Form.Group>
    <Form.Group>
        <Form.Label htmlFor='model'>Model</Form.Label>
        <Form.Select defaultValue={'DEFAULT'} value={formData.model} id='model' name='model' onChange={handleChange}>
            <option value='DEFAULT' disabled>Select Model</option>
            {modelArr.sort().map((option, index) => {
                return (
                    <option key={index} value={option}>
                        {option}
                    </option>
                )
            })}
        </Form.Select>
    </Form.Group>
    <Form.Group>
        <Form.Label htmlFor='mileage'>Mileage</Form.Label>
        <Form.Control value={formData.mileage} id='mileage' name='mileage' type='number' onChange={handleChange}></Form.Control>
    </Form.Group>
    <Form.Group>
        <Form.Label htmlFor='image'>Image</Form.Label>
        <Form.Control id='image' name='image' type='file' accept='image/png, image/jpeg' onChange={handleChange}></Form.Control>
    </Form.Group>
    <Button type='submit'>Update Car</Button>
</Form>
  )
}

export default CarEdit