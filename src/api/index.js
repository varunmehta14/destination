import axios from 'axios'

const destinationApi = axios.create({
    baseURL: 'http://localhost:3000/destinationApi',
})

 export const insertDestination = payload => destinationApi.post(`/destination`, payload)
 export const getAllDestinations = () => destinationApi.get(`/destination`)
 export const updateDestinationById = (id, payload) => destinationApi.put(`/user/${id}`, payload)
 export const deleteDestinationById = id => destinationApi.delete(`/user/${id}`)
export const getDestinationByName = name => destinationApi.get(`/destination/${name}`)

const destinationApis = {
    insertDestination,
    getAllDestinations,
    updateDestinationById,
    deleteDestinationById,
    getDestinationByName,
}

export default destinationApis;