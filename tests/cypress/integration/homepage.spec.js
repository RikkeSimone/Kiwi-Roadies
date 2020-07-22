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
    // Add test to select start
    // cy.get('h3')
    //   .contains('YOUR ROADIE WILL START IN ' + start.toUpperCase)
  })

  it('Includes a roadie end drop down', () => {
    cy.get('.roadieend')
      .contains('Choose Roadie End')
    // Add test to select end
    // cy.get('h3')
    //   .contains('YOUR ROADIE WILL END IN ' + end.toUpperCase)
  })

  it('Includes an arrow button to button', () => {
    cy.get('.submitbutton')
      .contains('...aaaand pop it through!')
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

describe('The Final Trip screen loads with a map with activities and autompopulated driving directions', () => {
  it('Successfully loads the logo and loading screen image', () => {
    cy.get('img')
      .should('have.class', 'logo')
    cy.get('img')
      .should('have.class', 'kiwi-car')
  })
})

// describe('Request', () => {
//   it('displays random users from API', () => {
//     cy.request('https://jsonplaceholder.typicode.com/users')
//       .should((response) => {
//         expect(response.status).to.eq(200)
//         expect(response.body).to.have.length(10)
//         expect(response).to.have.property('headers')
//         expect(response).to.have.property('duration')
//       })
//   })
// })
