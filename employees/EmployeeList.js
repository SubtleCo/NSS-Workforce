import { getComputers, useComputers }       from "../computers/ComputerProvider.js"
import { getEmployees, useEmployees }       from "./EmployeeProvider.js"
import { Employee }                         from "./Employee.js"
import { getDepartments, useDepartments }   from "../departments/DepartmentProvider.js"


const targetElement = document.querySelector('.employees')

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(() => {
            const allEmployees = useEmployees()
            const allComputers = useComputers()
            const allDepartments = useDepartments()
            const employeeHTML = allEmployees.map(employee => {
                const matchedComputer = allComputers.find(computer => computer.id === employee.computerId)
                const matchedDepartment = allDepartments.find(dept => dept.id === employee.departmentId)
                // debugger
                return Employee(employee, matchedComputer, matchedDepartment)
            }).join("")
            render(employeeHTML)
        })
}

const render = newHTML => targetElement.innerHTML = newHTML