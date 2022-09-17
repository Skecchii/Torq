import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8000/notes',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})