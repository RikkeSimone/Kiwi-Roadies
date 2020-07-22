/* global cy */

describe('The Home Page', () => {
  it('Successfully loads the home page', () => {
    cy.visit('/')
    cy.get('h3')
      .contains('YOUR NAME')
  })

  it('Accepts a name text input value', () => {
    cy.get("input[type='text']").type('Arianna')
    cy.get('.fa-arrow-circle-right').click()
  })
})

describe('The Trip Planner Page', () => {
  it('Progress to the next trip planning screen with your name', () => {
    cy.get('h2')
      .contains('Hey, Arianna!')
  })

  it('Includes a roadie start drop down', () => {
    cy.get('.roadiestart')
      .contains('Choose Roadie Start')
  })

  it('Includes a roadie end drop down', () => {
    cy.get('.roadieend')
      .contains('Choose Roadie End')
  })

  it('Includes a roadie days drop down', () => {
    cy.get('.daysaway')
      .contains('How many days away?')
  })

  it('Includes an arrow button to button', () => {
    cy.get('.submitbutton')
      .contains('...aaaand pop it through!')
  })
})
