/* eslint-disable no-undef */
describe("payment", () => {
  it("user can make payment", () => {
    cy.visit("/login");
    cy.findByRole("textbox", {
      name: /email/i,
    }).type("hotelone@gmail.com");
    cy.findByLabelText(/password/i).type("Hotel@123.");
    cy.findByRole("button", {
      name: /login now/i,
    }).click();
  });
});
