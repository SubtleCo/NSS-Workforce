let employeesCollection = []

export const useEmployees = () => [...employeesCollection]

export const getEmployees = () => {
    return fetch(`http://localhost:8088/employees`)
        .then(res => res.json())
        .then(parsedRes => {
            employeesCollection = parsedRes
        })
}
