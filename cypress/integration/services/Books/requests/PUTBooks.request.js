/// <reference types='cypress'/>

const payloadChangeBook = require('../payloads/change-book.json')

function changeBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: `Books/0`,
        header: {
            'content-type': 'application/json',
            
        },
        failOnStatusCode: false,
        body: payloadChangeBook
    })
}
export{ changeBook };
