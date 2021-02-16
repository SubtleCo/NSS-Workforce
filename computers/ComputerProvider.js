let computerCollection = []

export const useComputers = () => [...computerCollection]

export const getComputers = () => {
    return fetch(`http://localhost:8088/computers`)
        .then(res => res.json())
        .then(parsedRes => {
            computerCollection = parsedRes
        })
}