import * as GETActivities from '../requests/GETActivities.request';

describe('get list of activities', () => {

    it('list of activities', () => {
        GETActivities.allActivities().should((responseActivities) => {
            cy.log(responseActivities.status);

            expect(responseActivities.status).to.eq(200);
            expect(responseActivities.body).to.be.not.null;
        });
    });

});