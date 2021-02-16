let employeeCustomerCollection = []

export const useEmployeeCustomers = () => [...employeeCustomerCollection]

export const getEmployeeCustomers = () => {
    return fetch(`http://localhost:8088/employeeCustomers`)
        .then(res => res.json())
        .then(parsedRes => employeeCustomerCollection = parsedRes)
}