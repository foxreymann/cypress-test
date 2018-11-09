describe('enquire loads from homepage', () => {
  before(() => {
    cy.visit('/');
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.get('.frontpage__hero-container--content > .btn').click();
  });

  it('should display the title correctly', () => {
    cy.get('h1').should('have.text', '\n            \n  Enquire with AAT\n\n\n\n\n          ')
  });

  it('should have the enquire form with 6 input elements', () => {
    cy.get('.signup__form input').should('have.length', 6)
  });
});
