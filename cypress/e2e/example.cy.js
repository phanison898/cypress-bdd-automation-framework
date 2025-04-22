describe("Cypress Basic Browser Automation", () => {
  it("Visits BlazeDemo and performs login", () => {
    const from = "Mexico City";
    const to = "London";
    const expected = `Flights from ${from} to ${to}:`;

    cy.visit("https://www.blazedemo.com/");
    cy.title().should("eq", "BlazeDemo");

    cy.get("select[name='fromPort']").select(from);
    cy.get("select[name='toPort']").select(to);

    cy.get("input[value='Find Flights']").click();
    cy.url().should("include", "reserve");

    cy.get(".container > h3").should("contain", expected);
  });
});
