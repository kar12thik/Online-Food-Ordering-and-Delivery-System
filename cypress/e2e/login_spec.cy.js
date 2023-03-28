/* eslint-disable no-undef */
describe("payment", () => {
  beforeEach(() => {
    cy.visit("/login");

    cy.get("body").within(() => {
      cy.get("div").should("contain.text", "Don't have an account yet?");
    });
    cy.findByRole("textbox", {
      name: /email/i,
    }).type("userone@gmail.com");
    cy.findByLabelText(/password/i).type("Userone@123.");
    cy.findByRole("button", {
      name: /login now/i,
    }).click();
    cy.wait(5000);
  });

  // it("user can log in using restaurant credentials", () => {
  // cy.visit("/login");
  //   cy.findByRole("textbox", {
  //     name: /email/i,
  //   }).type("hotelone@gmail.com");
  //   cy.findByLabelText(/password/i).type("Hotel@123.");
  //   cy.findByRole("button", {
  //     name: /login now/i,
  //   }).click();
  // });

  it("restaurant user can make visit restaurants page", () => {
    // cy.visit("/login");
    cy.findByRole("link", {
      name: /restaurants/i,
    }).click();
    cy.get("div.restaurant:first").as("selectedRestaurant");
    cy.get("@selectedRestaurant").find("button.menu-button").click();
    cy.findByRole("button", {
      name: /confirm order/i,
    }).click();
    cy.findByRole("button", {
      name: /ok/i,
    }).click();
    cy.findByRole("link", {
      name: /order requests/i,
    }).click();
  });
});
