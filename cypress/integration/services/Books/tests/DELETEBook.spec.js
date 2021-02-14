import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';


describe('delete a book from the list', () => {
    
    it('list from alarms definition', () => {
        GETBooks.allBooks().then((resAllBooks) => {


            cy.log(resAllBooks.body[0].ID).should((resDeleteBook) => {
                expect(resAllBooks.status).to.eq(200);
                expect(resAllBooks.body).to.be.not.null;

            })
        })
    });

    it('add and delete a book from the list', () => {
        POSTBooks.addBook().then((resetAddBook) => {
            DELETEBooks.deleteBook(resetAddBook.body.ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(400);
            });
        });
    });


});