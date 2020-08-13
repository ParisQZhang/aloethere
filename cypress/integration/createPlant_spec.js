describe('create plant', () => {

  beforeEach(()=> {
    cy.visit('http://localhost:3000/')

  })

  describe('User can create plant and verify', ()=> {

    // set name as random string here
    const nickName = 'testname';

    it('takes you to create plant page', ()=> {
      cy.get('#find-plant').click()
      cy.url().should('include', '/plants')
    });

    it('can fill in form and submit plant', () => {
      cy.get('#find-plant').click()
      cy.get('#difficulty #value-high').click()
      cy.get('#fill-water input[value="7 days"]').click({ force:true })
      cy.get('#fern #value-fern').click({ multiple: true })
      cy.get('#lights input[value="Low"]').click({force:true})
      cy.get('#humidity input[value="High"]').click({force:true})
      cy.get('#air-purifying input[value="true"]').click({force:true})
      cy.get('.form_btn_green').click({force:true})
      cy.get('.plantlist_title_green').should('contain', 'Our finds for you:')
      cy.get('#plantcard-Fern #add-plant-button').click()
      cy.get('h2').should('contain', 'Last 3 questions ...')
      cy.get('#plant-name').type(nickName)
      cy.get('#plant-bought').type('2020-11-01')
      cy.get('#plant-last-watered').type('2020-11-01')
      cy.get('#add-plant-button').click()
    });

    it('shows new plant in list of plants to select from', () => {
      cy.get('#check-plants').click()
      cy.get(`#plantcard-${nickName}`);
      cy.get(`#plantcard-${nickName}`).find('.myplantcard-title').should('contain', nickName)

      //delete plant for cleanup
      cy.get(`#plantcard-${nickName}`).find('.delete_button').click()
      cy.get('.confirmation_button').first().click({force:true});
    });
  })

  describe('User cannot create plant without all fields selected', () => {

  });
})