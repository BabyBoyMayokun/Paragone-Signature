///<reference types ="Cypress"/>

import paragoneSignature from "../pageObject"

describe('Paragone Signature TEST',()=>{
    it('Testing Functionality',()=>{
    const ParagoneSignature = new paragoneSignature    
        
        ParagoneSignature.visitUrl()
        ParagoneSignature.verifyHomePage()
        ParagoneSignature.selectAboutUs()
        ParagoneSignature.verifyAboutUsPage()
        ParagoneSignature.selectListings()
        ParagoneSignature.verifyListingsPage()
        //Partner with us has it's own Spec
        
    })
})