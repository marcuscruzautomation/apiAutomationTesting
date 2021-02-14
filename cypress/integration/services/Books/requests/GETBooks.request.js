
/// <reference types="cypress"/>

function allBooks() {
    return cy.request({
        method: 'GET',
        url: '/Books',
        failOnStatusCode: false,
        headers: {
            //Authorization: `Bearer ${}`,
            "Content-type": "application/json"
          }    
        })
    };

export { 
    allBooks 
};

