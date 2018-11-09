describe('enquire loads from homepage', () => {
  before(() => {
    cy.visit('/');
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get('.frontpage__hero-container--content > .btn').click();
  });

  it('should display the title correctly', () => {
    cy.get('h1').should('be.visible')
  });

  it('should have the enquire form with 6 input elements', () => {
    cy.get('.signup__form input').should('have.length', 6)
  });

  it('should have submit button', () => {
    cy.get('.form__buttoncontainer > fab-button-primary').should('be.visible')
  });
});
