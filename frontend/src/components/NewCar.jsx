import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import API from 'utils/BackendAPI'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Make from 'utils/CarData/Make'
import Year from 'utils/CarData/Year'
import Model from 'utils/CarData/Model'

const NewCar = ({ cars, setCars, models}) => {

const navigate = useNavigate()

const initialState = {
    year: '',
    make: '',
    model: '',
    mileage: '',

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
        <Form.Select defaultValue={'DEFAULT'} id='year' name='year' onChange={handleChange}>
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
        <Form.Select defaultValue={'DEFAULT'} id='make' name='make' onChange={handleChange}>
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
        <Form.Select defaultValue={'DEFAULT'} id='model' name='model' onChange={handleChange}>
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
        <Form.Control id='mileage' name='mileage' type='number' placeholder='enter miles' onChange={handleChange}></Form.Control>
    </Form.Group>

    <Button type='submit'>Add Car</Button>
</Form>

  )
}

export default NewCar