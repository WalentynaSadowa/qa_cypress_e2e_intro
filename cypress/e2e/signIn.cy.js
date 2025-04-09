/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');

    cy.contains('Sign in').click();

    cy.get('input[type="email"]').type('my_email@example.com');
    cy.get('input[type="password"]').type('asdfg3');

    cy.get('button[type="submit"]').click();

    cy.get('nav').should('contain', 'YourUsername');
  });
});

