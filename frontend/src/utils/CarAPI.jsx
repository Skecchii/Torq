import axios from 'axios'

export default axios.create({
    baseURL: `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=10&excludeKeys=Category`,
    headers: {
        'X-Parse-Application-Id': 'FFnsT6T0urWFIk5Wm3wS7FHh7HEmaFR5naRa4Egt',
        'X-Parse-REST-API-Key': 'qy5kgG7cn2sZn6pklElMOjD1BW8d9FnHlXDigGXl',
    }
})

