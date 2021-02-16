export const Employee = (employee, computer)=> {
    return `
    <div class="employee card">
        <h2>${employee.firstName} ${employee.lastName}</h2>
        <p>${computer.year} ${computer.model}
    </div>`
}