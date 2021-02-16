export const Employee = (employee, computer, department, location)=> {
    return `
    <div class="employee">
        <header class="employee__name">
            <h1>${employee.firstName} ${employee.lastName}</h1>
        </header>
        <section class="employee__computer">
            Currently using a ${computer.year} ${computer.model}
        </section>
        <section class="employee__department">
            Works in the ${department.name} department
        </section>
        <section class="employee__location">
            Works at the ${location.name} office
        </section>
    </div>`
}
