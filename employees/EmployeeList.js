import { getComputers, useComputers } from "../computers/ComputerProvider.js"
import { getEmployees, useEmployees } from "./EmployeeProvider.js"
import { Employee }                   from "./Employee.js"


const targetElement = document.querySelector('.employees')

export const EmployeeList = () => {
    getEmployees()
    .then(getComputers)
    .then( () => {
        const allEmployees = useEmployees()
        const allComputers = useComputers()
        const employeeHTML = allEmployees.map(employee => {
            const matchedComputer = allComputers.find(computer => computer.id === employee.computerId)
            return Employee(employee, matchedComputer)
        }).join("")
        render(employeeHTML)
    })
}

const render = newHTML => targetElement.innerHTML = newHTML