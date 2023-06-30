describe('Login to Bankxyz', () => {
  it('User is able to login successfully', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.get("button[ng-click='customer()']").click()
    cy.get("button[ng-click='manager()']").click()
    cy.get(".btn.btn-lg.tab[ng-class='btnClass1']").click()

// Generate a random name
function generateRandomName() {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let name = '';

  for (let i = 0; i < 8; i++) {
    name += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return name;
}

// Type a random name into the text field
cy.get("input[placeholder='First Name']").type(generateRandomName());
 
  //  cy.get("input[placeholder='First Name']").type("Olamide")
  //   cy.get("input[placeholder='First Name']").invoke('val').should('match', /^[A-Za-z]+$/);
    cy.get("input[placeholder='Last Name']").type(generateRandomName());
  //   cy.get("input[placeholder='Last Name']").invoke('val').should('match', /^[A-Za-z]+$/);
   cy.get("input[placeholder='Post Code']").type("101212")
  // cy.get("input[placeholder='Post Code']").invoke('val').should('match', /^\d+$/);
  cy.get("button[type='submit']").click()
  })
})