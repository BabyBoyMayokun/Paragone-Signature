const data = require('../fixtures/PWU.json')

class paragoneSignature
{
    visitUrl(){
        cy.visit('https://www.paragonesignature.com/')
    }
    verifyHomePage(){
        cy.get('.css-lu6pjb').should('contain','Expand your Expertise')
    }
    selectAboutUs(){
        cy.get('.css-5ri2xm .css-1uu2t8l:nth-child(2)').click()
    }
    verifyAboutUsPage(){
        cy.get('.chakra-stack .css-hvi9to').should('contain','Who are we?')
    }
    selectListings(){
        cy.get('a[href="/listings"]').click()
    }
    verifyListingsPage(){
        cy.get('div.css-1jw7wt4 div.css-0 p.css-1yms7y1').should('contain','Listings')
    }
    selectPartnerWithUs(){
        cy.get('div.css-owjkmg:nth-child(4)').click()
    }
    enterNamePWU(){
        cy.get('#nameOfCompanyOrIndividual').type(data.name)
    }
   
    
}
export default paragoneSignature