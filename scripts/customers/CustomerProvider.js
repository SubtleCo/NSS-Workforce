let customerCollection = []

export const useCustomers = () => [...customerCollection]

export const getCustomers = () => {
    return fetch(`http://localhost:8088/customers`)
        .then(res => res.json())
        .then(parsedRes => customerCollection = parsedRes)
}