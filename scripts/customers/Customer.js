export const Customer = (customer, employees) => {
    return `
    <div class="employee">
        <header class="customer__name">
            <h1>${customer.name}</h1>
        </header>
        <section class="customer__employees">
            Has worked with the following employees:
            <ul>
                ${employees.map(emp => `<li>${emp.firstName}</li>`).join("")}
            </ul>
        </section>
    </div>`
}