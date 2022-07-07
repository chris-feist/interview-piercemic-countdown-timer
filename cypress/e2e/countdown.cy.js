describe('Countdown button', () => {

  beforeEach(()=> {
    cy.visit('http://localhost:3000/')
  })

  it('should display correct text when clicked', () => {
    cy.getByTestId('countdown-button').contains('Start Countdown').click();
    
    cy.getByTestId('countdown-button').should('have.text', 'Cancel')
    cy.getByTestId('countdown-count').should('have.text', '3')
    cy.getByTestId('countdown-count').should('have.text', '2')
    cy.getByTestId('countdown-count').should('have.text', '1')
    cy.getByTestId('countdown-count').should('have.text', 'GO')
    cy.getByTestId('countdown-button').should('have.text', 'Start Countdown')
  })

  it('should cancel countdown when "Cancel" button is selected', () => {
    cy.getByTestId('countdown-button').contains('Start Countdown').click()
    cy.getByTestId('countdown-button').contains('Cancel').click()

    cy.getByTestId('countdown-count').should('not.exist')
  })
})