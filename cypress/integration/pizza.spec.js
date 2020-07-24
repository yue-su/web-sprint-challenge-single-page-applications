
const URL = "http://localhost:3000/"

describe("Page loading ok", () => {
  it("can navigate to the site", () => {
    // this is setup for the actual test
    cy.visit(URL)
    // assert that the site we landed at is the correct one
    cy.url().should("include", "localhost")
  })
})

describe("create order", () => {
    it("add username and select size", () => {
        cy.get('input[name="name"]')
            .type('Madman')
        .should('have.value', 'Madman')
    })

    it("select a size", () => {
        cy.get('select[name="size"]')
            .select('12')
        .should('have.value', '12')
    })

    it('select a sauce', () => {
        cy.get('input[name="sauce"]')
        .check('BBQ')
    })

    it('select toppings', () => {
        cy.get('input[name="Black Olives"]')
            .check()
        cy.get('input[name="Green Pepper"]')
        .check()
    })

    it('leave instructions', () => {
        cy.get('input[name="instruction"]').type("add spicy sauce")
        .should('have.value', 'add spicy sauce')
    })

    it('submit order', () => {
        cy.contains('Add to Order').click()
    })
})
