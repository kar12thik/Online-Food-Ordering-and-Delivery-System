/* eslint-disable no-undef */
describe("payment", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("/login");

    cy.get("body").within(() => {
      cy.get("div").should("contain.text", "Don't have an account yet?");
    });
    cy.findByRole("textbox", {
      name: /email/i,
    }).type("hotelone@gmail.com");
    cy.findByLabelText(/password/i).type("Hotel@123.");
    cy.findByRole("button", {
      name: /login now/i,
    }).click();
    cy.wait(2000);
  });

  it("restaurant user can make visit restaurants page", () => {
    // cy.visit("/login");
    // cy.findByRole("link", {
    //   name: /restaurants/i,
    // }).click();
    // cy.get("div.restaurant:first").as("selectedRestaurant");
    // cy.get("@selectedRestaurant").find("button.menu-button").click();
    // cy.findByRole("button", {
    //   name: /confirm order/i,
    // }).click();
    // cy.findByRole("button", {
    //   name: /ok/i,
    // }).click();
    // cy.findByRole("link", {
    //   name: /my orders/i,
    // }).click();
    cy.findByRole("link", {
      name: /order requests/i,
    }).click();
    // cy.get("div.order-created:first").as("selectedRestaurant");
    // cy.get("@selectedRestaurant").find("button.menu-button").click();
    cy.findByRole("button", {
      name: /pending pending/i,
    }).click();
    cy.get("div.order-created").within(() => {
      cy.get("div.order-item:first")
        .as("selectedItem")
        .within(() => {
          cy.get("@selectedItem").find("button.order-button").click();
        });
    });
    // cy.get("@selectedRestaurant").find("button.order-button").click();
    // const button = null;
    // button = cy
    //   .findByRole("button", {
    //     name: /in progress in progress/i,
    //   })
    //   .within(button)
    //   .findByText(/in progress/i)
    //   .click();
    // cy.get("div.restaurant:first").as("selectedRestaurant");
    // cy.get("@selectedRestaurant").find("button.order-button").click();
  });
});
