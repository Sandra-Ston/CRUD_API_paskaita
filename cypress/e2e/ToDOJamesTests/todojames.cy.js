//svetainės atidarymas
//cy.visit()

it('Create new to do', () => {
    cy.visit('https://todolist.james.am/#/');

    //1. automanine testavimo sistema turi suvesti uzduoties pavadinima
    //1. 1. patikrinti ar input egzistuoja
    //1. 2. ivesti konkretu teksta i input
    //1. 3. patikrinti ar uzduotis prisidejo sekmingai

    // cy.get panasu i document.querySelector("irasau ka selectinu");
    cy.get('input.new-todo').type('1 užduotis{enter}');
    // Patikriname, ar sukurta užduotis yra matoma sąraše

    
    //cy.contains('li', '1 užduotis').should('be.visible');
    cy.get('.todo-list li').should('contain.text', '1 užduotis');


    
});