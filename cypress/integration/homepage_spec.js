describe('home-page', () => {

  beforeEach(()=> {
    cy.visit('http://localhost:3000/')
  })

  it('loads correctly', ()=> {
    cy.get('.title_text').should('contain', 'Aloe there!')
  })

  it('shows button that shows my plants', ()=> {
    cy.get('#check-plants').should('contain', 'Check on them')
    cy.get('#check-plants').click()
    cy.url().should('include', '/myplants')
  })

  it('shows button that finds next plants', () => {
    cy.get('#find-plant').should('contain', 'Find your next plant')
    cy.get('#find-plant').click()
    cy.url().should('include', '/plants')
  })

})