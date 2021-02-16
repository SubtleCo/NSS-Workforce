import { getComputers, useComputers }                   from "../computers/ComputerProvider.js"
import { getEmployees, useEmployees }                   from "./EmployeeProvider.js"
import { Employee }                                     from "./Employee.js"
import { getDepartments, useDepartments }               from "../departments/DepartmentProvider.js"
import { getLocations, useLocations }                   from "../locations/LocationProvider.js"
import { getEmployeeCustomers, useEmployeeCustomers }   from "./EmployeeCustomerProvider.js"
import { getCustomers, useCustomers }                   from "../customers/CustomerProvider.js"


const employeeContainer = document.querySelector('.employees')

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(getLocations)
        .then(getEmployeeCustomers)
        .then(getCustomers)
        .then(() => {
            const allEmployees = useEmployees()
            const allComputers = useComputers()
            const allDepartments = useDepartments()
            const allLocations = useLocations()
            const allCustomers = useCustomers()
            const allEmployeeCustomers = useEmployeeCustomers()
            const employeeHTML = allEmployees.map(employee => {
                const matchedComputer = allComputers.find(computer => computer.id === employee.computerId)
                const matchedDepartment = allDepartments.find(dept => dept.id === employee.departmentId)
                const matchedLocation = allLocations.find(dept => dept.id === employee.locationId)

                // narrow down to an array of relevant relationships
                const matchedRelationships = allEmployeeCustomers.filter(ec => ec.employeeId === employee.id)

                // convert relationships to customers
                const matchedCustomers = matchedRelationships.map(rel => allCustomers.find(customer => customer.id === rel.customerId))
                return Employee(employee, matchedComputer, matchedDepartment, matchedLocation, matchedCustomers)
            }).join("")
            render(employeeHTML)
        })
}

const render = newHTML => employeeContainer.innerHTML = newHTML