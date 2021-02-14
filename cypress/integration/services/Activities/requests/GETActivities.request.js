

/// <reference types="cypress"/>

function allActivities() {
    // cy.request - client http
    return cy.request({
        method: 'GET',
        url: '/Activities',
        failOnStatusCode: false,
    })
};

export { 
    allActivities 
};

