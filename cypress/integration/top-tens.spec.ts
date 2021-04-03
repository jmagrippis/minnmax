import {testedViewports} from '../testedViewports'

describe('Top Tens', () => {
  testedViewports.forEach((viewport) => {
    describe(`on ${viewport}`, () => {
      before(() => {
        cy.viewport(viewport)
      })

      it('can navigate to the articles, and back', () => {
        cy.visit('/top-tens')

        cy.findByRole('heading', {name: /Top Tens/, level: 1}).should('exist')
        cy.findAllByRole('article').should('exist')

        // navigate to the first article
        let title: string
        cy.findAllByRole('article')
          .first()
          .within(() => {
            cy.findByRole('heading', {level: 2}).should(($title) => {
              title = $title.text()
            })
            cy.findByRole('heading', {level: 2}).click()
          })
          .then(() => {
            cy.findByRole('heading', {name: /^((?!Top Tens).)*$/, level: 1})
          })
      })
    })
  })
})
