/* global cy */

const name = 'Arianna'
// const start = 'Auckland'
// const end = 'Raglan'

describe('The Home Page', () => {
  it('Successfully loads the home page with a header logo and background image and text', () => {
    cy.visit('/')
    cy.get('img')
      .should('have.class', 'logo')
    cy.get('img')
      .should('have.class', 'github-gato')
    cy.get('#menu')
      .contains('Made with love by Ariana, Rikke, Kim and Jonty')
    cy.get('p')
      .contains('UP FOR A ROADIE?')
    cy.get('h3')
      .contains("WHAT'S YOUR NAME?")
  })

  it('Accepts a name text input value', () => {
    cy.get('#name')
      .type(name)
    cy.wait(5000) // wait 5 seconds
  })

  it('Includes an arrow button', () => {
    cy.get('.fa-arrow-circle-right')
      .click()
  })
})

describe('The First Loading Screen', () => {
  it('Successfully loads the logo and loading screen image', () => {
    cy.get('img')
      .should('have.class', 'logo')
    cy.get('img')
      .should('have.class', 'kiwi-car')
  })
})

describe('The Trip Planner Page', () => {
  it('Progress to the next trip planning screen with your name', () => {
    cy.get('h2')
      .contains('Hey, ' + name)
  })

  it('Includes a roadie start drop down', () => {
    cy.get('.roadiestart')
      .contains('Choose Roadie Start')
  })

  it('Includes a roadie end drop down', () => {
    cy.get('.roadieend')
      .contains('Choose Roadie End')
  })

  it('Includes an arrow button', () => {
    cy.get('.submitbutton')
    cy.wait(5000) // wait 5 seconds
    cy.get('.fa-arrow-circle-right')
      .click()
  })
})

describe('The Second Loading Screen', () => {
  it('Successfully loads the logo and loading screen image', () => {
    cy.get('img')
      .should('have.class', 'logo')
    cy.get('img')
      .should('have.class', 'kiwi-car')
  })
})

describe('The Final Trip screen loads with header logo and background image and text', () => {
  it('Successfully loads the logo and loading screen image', () => {
    cy.get('img')
      .should('have.class', 'logo')
    cy.get('img')
      .should('have.class', 'kiwi-car')
    cy.get('h3')
      .contains('Awesome choice!')
  })
  it('Successfully loads the map with driving directions', () => {
    cy.get('canvas')
      .should('have.class', 'mapboxgl-canvas')
  })
})
