import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(300);

/* eslint-disable no-undef */
describe("login", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.viewport(1536, 1050);
    cy.visit("/login");

    cy.get("body").within(() => {
      cy.get("div").should("contain.text", "Don't have an account yet?");
    });
    cy.findByRole("textbox", {
      name: /email/i,
    }).type("user40@gmail.com");
    cy.findByLabelText(/password/i).type("Hotel@123.");
    cy.findByRole("button", {
      name: /login now/i,
    }).click();
    cy.wait(2000);
  });

  it("restaurant user can make visit restaurants page", () => {
    // cy.visit("/login");
    cy.findByRole("link", {
      name: /restaurants/i,
    }).click();
    cy.findByRole("textbox", {
      name: /search/i,
      // }).type("La Forchetta d´Oro");
    }).type("Dionysos Garden");
    cy.get("div.restaurant:first").as("selectedRestaurant");
    cy.get("@selectedRestaurant").find("button.menu-button").click();
    cy.get("div.items:first").as("selectedItem");
    cy.get("@selectedItem").find("button.add-item-to-cart").click();
    // cy.get("div.items:eq(1)").as("selectedItem");
    // cy.get("@selectedItem").find("button.add-item-to-cart").click();
    cy.findByRole("button", {
      name: /confirm order/i,
    }).click();
    cy.findByRole("button", {
      name: /ok/i,
    }).click();
    cy.findByRole("link", {
      name: /my orders/i,
    }).click();
    cy.findByRole("button", {
      name: /pending pending/i,
    }).click();
  });
});
