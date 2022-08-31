/// <reference types="cypress" />

describe("visit", () => {
  it("User can visit page", () => {

    // visits the page
    cy.visit('localhost:3000')
    // click on other city
    // click on different language

    // type city in search & click search/ hit enter

    //verify result
  })
})

// Topbar

describe("Cities list", () => {
  it("Can see the list of cities", () => {
        // check list of cities
        cy.get(".cities").children()
  })
})

describe("Selected city", () => {
  it("Selected city is Berlin", () => {
     // check selected city
    cy.get('.cities > .selected').contains("Berlin").click()
})
})

describe("Change city to London", () => {
  it("Select London", () => {
     // check selected language
    cy.get('.cities > :nth-child(2)').contains("London").click()
    cy.get('.locationInfo > h1').contains("London")
})
})

describe("Language list", () => {
  it("Can see the list of languages", () => {
     // check selected city
    cy.get(".languages").children()
})
})

describe("Selected language", () => {
  it("Selected language is Berlin", () => {
     // check selected language
    cy.get('.languages > .selected').contains("en")
})
})

describe("Change language", () => {
  it("Select DE >> see the country name change >> change it back to EN ", () => {
     // check selected language
    cy.get('.languages > .null').contains("de").click()
    cy.get('.locationInfo > h1').contains("Vereinigtes Königreich")
    cy.get('.languages > .null').contains("en").click()
    cy.get('.locationInfo > h1').contains("United Kingdom")
})
})



// Main

describe("Search", () => {
  it("Type Tokyo >> see country change", () => {
        // check list of cities
    cy.get('input').type("Tokyo")
    cy.get('button').click()
    cy.get('.locationInfo > h1').contains("Tokyo")
  })
})
