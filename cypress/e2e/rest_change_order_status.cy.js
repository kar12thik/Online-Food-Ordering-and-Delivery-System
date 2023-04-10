import { slowCypressDown } from "cypress-slow-down";

slowCypressDown(300);

/* eslint-disable no-undef */
describe("payment", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.viewport(1536, 1050);
    cy.visit("/login");

    cy.get("body").within(() => {
      cy.get("div").should("contain.text", "Don't have an account yet?");
    });
    cy.findByRole("textbox", {
      name: /email/i,
      // }).type("hotel40@gmail.com");
    }).type("dionysosgarden@gmail.com");
    cy.findByLabelText(/password/i).type("Hotel@123.");
    cy.findByRole("button", {
      name: /login now/i,
    }).click();
    cy.wait(2000);
  });

  it("restaurant user can make visit restaurants page", () => {
    cy.findByRole("link", {
      name: /order requests/i,
    }).click();
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
    cy.findByRole("button", {
      name: /in progress in progress/i,
    }).click();
    cy.get("div.order-progress").within(() => {
      cy.get("div.order-item:first")
        .as("selectedItem")
        .within(() => {
          cy.get("@selectedItem").find("button.order-button").click();
        });
    });
    cy.findByRole("button", {
      name: /delivered delivered/i,
    }).click();
    // cy.get("div.order-delivered")
    //   .within(() => {
    //     cy.get("div.order-item:first")
    //       .as("selectedItem")
    //       .within(() => {
    //         cy.get("@selectedItem").find("button.order-button").click();
    //       });
    //   })
    //   .wait(1000);
  });
});
