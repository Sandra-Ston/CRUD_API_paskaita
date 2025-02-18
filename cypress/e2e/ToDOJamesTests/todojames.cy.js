/// <reference types="cypress" />

//svetainės atidarymas
//cy.visit()

it('Create new to do', () => {

    //uzeinama i svetaine
    cy.visit('https://todolist.james.am/#/');

    //1. automanine testavimo sistema turi suvesti uzduoties pavadinima
    //1.1. patikrinti ar input egzistuoja
    //1.2. ivesti konkretu teksta i input
    //1.3. patikrinti ar uzduotis prisidejo sekmingai

    // cy.get panasu i document.querySelector("irasau ka selectinu");
    cy.get('input.new-todo').type('1 užduotis{enter}');
    // Patikriname, ar sukurta užduotis yra matoma sąraše

    //Mano variantai:
    //cy.contains('li', '1 užduotis').should('be.visible');
    //cy.get('.todo-list li').should('contain.text', '1 užduotis');

    //Pagal destytoja:

    //tikrinama ar susikure uzduotis
    cy.get('ul.todo-list li');


    //tikrinama ar sukurta uzduotis turi konkretu parasyta varianta - KLAIDA NESUTIKRINA KONKRETAUS TEKSTO
    cy.contains('ul.todo-list li', '1 užduotis');

    //tikrinama ar suskurta uzduotis atvaizduojama
    cy.contains('ul.todo-list li', '1 užduotis').should('be.visible');

    
});

it('Delete new to do', () => {
    cy.visit('https://todolist.james.am/#/');
    cy.get('input.new-todo').type('1 užduotis{enter}');

    //1. uzduoties istrynimas
    //1.1. susikurti uzduoti
    //1.2. sukurta uzduoti istrinti
    //1.3. patikrinti ar sukurta uzduotis istrinta

    cy.get('input.new-todo').type('trinama uzduotis{enter}');


    //I variantas
    cy.contains('ul.todo-list li', 'trinama uzduotis').find('button.destroy').invoke('show');
    cy.contains('ul.todo-list li', 'trinama uzduotis').find('button.destroy').click();

    //II variantas
    //cy.contains('ul.todo-list li', 'trinama uzduotis').find('button').click({force:true});


    //Patikrinama ar elementas tikrai istrintas
    cy.contains('ul.todo-list li', 'trinama uzduotis').should('not.exist');

})

it('Edit to do item', () => {
    cy.visit('https://todolist.james.am/#/');
    cy.get('input.new-todo').type('1 užduotis{enter}');
    cy.get('input.new-todo').type('2 užduotis{enter}');
    cy.get('input.new-todo').type('3 užduotis{enter}');

    //1. uzduoties redagavimas
    //1.1. sukurti uzduoti
    //1.2. pasirinktos uzduoties laukelis isvalomas ir pridedama redaguota uzduotis
    //1.3. redaguota uzduotis turi buti matoma

    //I variantas
    //cy.contains('ul.todo-list li', '2 užduotis').dblclick();
    //cy.contains('ul.todo-list li', '2 užduotis').find('input.edit').clear().type('redaguota užduotis{enter}');

    //II variantas
    cy.contains('ul.todo-list li', '2 užduotis').dblclick().type('{selectAll}{del}redaguota užduotis{enter}');

    cy.contains('ul.todo-list li', 'redaguota užduotis').should('be.visible');

})