import * as PUTBooks from '../requests/PUTBooks.request';
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'

describe('PUT books', () => {
    
    it('modifyng a book', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.changeBook(resAllBooks.body[0].ID).should((resChangeBook) => {

                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body).has.property('id', 0)
                expect(resChangeBook.body).has.property('title', 'Livro alterado')
                expect(resChangeBook.body).has.property('description', 'The book from the another galaxy')
                expect(resChangeBook.body).has.property('pageCount', 0)
                expect(resChangeBook.body).has.property('excerpt', 'string')
                expect(resChangeBook.body).has.property('publishDate', '2021-02-13T17:17:51.657Z')

            });
        });
    });

    it('create and modifyng a book', () => {
       
        POSTBooks.addBook().then((resAddBooks) => {
            PUTBooks.changeBook(resAddBooks.body.ID).should((resChangeBook) => {

                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
              

            });
        });


    });
});