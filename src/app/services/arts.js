import axios from "axios"

const artsAPI = axios.create({baseURL: "http://localhost:8000/art"})

function getArts () {
    const response = artsAPI.get('/')

    return response.data
}

function getArt (id) {
    const response = artsAPI.get(`/${id}`)

    return response.data
}

function deleteArts (id) {
    let all = artsAPI.get('/')

    all.filter((art) => art.id != id)

    return all
}

export {
    getArts,
    getArt,
    deleteArts,
}