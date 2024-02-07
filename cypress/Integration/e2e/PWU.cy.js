///<reference types="Cypress"/>

import paragoneSignature from "../pageObject"

describe('Partner With Us Functionality',()=>{
    it('Submit Form Functionality',()=>{
    const ParagoneSignature = new paragoneSignature
    
        ParagoneSignature.visitUrl()
        ParagoneSignature.selectPartnerWithUs()
        ParagoneSignature.enterNamePWU()
        
        

    })
})