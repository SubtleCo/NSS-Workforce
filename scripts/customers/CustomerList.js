import { getEmployees, useEmployees }                   from "../employees/EmployeeProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers }   from "../employees/EmployeeCustomerProvider.js"
import { getCustomers, useCustomers }                   from "./CustomerProvider.js"
import { Customer }                                     from "./Customer.js"

const customerContainer = document.querySelector('.customers')

export const CustomerList = () => {
    getEmployees()
        .then(getEmployeeCustomers)
        .then(getCustomers)
        .then(() => {
            const allEmployees = useEmployees()
            const allCustomers = useCustomers()
            const allEmployeeCustomers = useEmployeeCustomers()
            const customerHTML = allCustomers.map(customer => {
    
                // narrow down to an array of relevant relationships
                const matchedRelationships = allEmployeeCustomers.filter(ec => ec.customerId === customer.id)

                // convert relationships to customers
                const matchedEmployees = matchedRelationships.map(rel => allEmployees.find(employee => employee.id === rel.employeeId))
                return Customer(customer, matchedEmployees)
            }).join("")
            render(customerHTML)
        })
}

const render = newHTML => customerContainer.innerHTML = newHTML