// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//Komanda-funkcija
Cypress.Commands.add('addToDos',(sessionName) => {
    cypress.session(sessionName, ()=>{
        cypress.visit('https://todolist.james.am/#/');
        cypress.get('input.new-todo').type('1 uzduotis{enter}');
        cypress.get('input.new-todo').type('2 uzduotis{enter}');
        cypress.get('input.new-todo').type('3 uzduotis{enter}');
        cypress.get('input.new-todo').type('4 uzduotis{enter}');
        cypress.get('input.new-todo').type('5 uzduotis{enter}');
    });
    cy.log('addToDos komanda ivykdyta')
});
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })