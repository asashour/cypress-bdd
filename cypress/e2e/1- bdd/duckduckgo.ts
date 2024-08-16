import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see the title section", () => {
  cy.get('.homepage-cta-section_title__Lovig').should(
    'have.text',
    'Switch to DuckDuckGo. It’s private and free!');
});
