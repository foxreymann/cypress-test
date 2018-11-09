describe('enquire loads from homepage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  });

  it('should display the title correctly', () => {
    cy.get('.frontpage__hero-container--content > .btn').click();
    cy.get('h1').should('have.text', '\n            \n  Enquire with AAT\n\n\n\n\n          ')
    cy.get('.signup__form input').should('have.length', 6)
  });
});
