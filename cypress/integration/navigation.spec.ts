import {testedViewports} from '../testedViewports'

describe('Navigation', () => {
  testedViewports.forEach((layout) => {
    describe(`on ${layout}`, () => {
      before(() => {
        cy.viewport(layout)
      })

      it('can navigate to all the various sections of the site', () => {
        cy.visit('/')

        cy.findByRole('heading', {name: 'MinnMax', level: 1}).should('exist')

        // navigates to the Top Tens page
        cy.findByRole('navigation').should('exist')
        cy.findByRole('link', {name: 'Top Tens'}).click()
        cy.findByRole('heading', {name: 'Top Tens'}).should('exist')

        // navigates to the About page
        cy.findByRole('link', {name: 'About'}).click()
        cy.findByRole('heading', {name: 'About'}).should('exist')

        // navigates back to the home page
        cy.findByRole('link', {name: 'MinnMax'}).click()
        cy.url().should('match', /\/$/)

        // outbound links also exist
        cy.findByRole('link', {name: /github/i})
      })
    })
  })
})
