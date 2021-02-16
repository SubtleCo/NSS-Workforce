let locationsCollection = []

export const useLocations = () => [...locationsCollection]

export const getLocations = () => {
    return fetch(`http://localhost:8088/locations`)
        .then(res => res.json())
        .then(parsedRes => locationsCollection = parsedRes)
}