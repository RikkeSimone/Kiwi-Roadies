/* global cy */

describe('The Home Page', () => {
  it('Successfully loads the home page', () => {
    cy.visit('/')
    cy.get('h3')
      .contains('YOUR NAME')
  })
})
