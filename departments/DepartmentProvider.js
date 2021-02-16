let departmentCollection = []

export const useDepartments = () => [...departmentCollection]

export const getDepartments = () => {
    return fetch(`http://localhost:8088/departments`)
        .then(res => res.json())
        .then(parsedRes => departmentCollection = parsedRes)
}