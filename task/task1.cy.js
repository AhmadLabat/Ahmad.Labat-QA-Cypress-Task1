/// < reference types="cypress"/>
describe ("task1",()=>{
    it ("1",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        //cy.get(".navbar-brand");
        cy.get(".container").first().contains("conduit");
    })
    it ("2",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".navbar").find("ul").contains("Home");
        // cy.get(".navbar ul").find("li").first();
    })
    it ("3",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".navbar").find("ul").contains("Sign up");
        //cy.get(".navbar ul").find("li").eq(2);
    })
    it ("4",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".row").find("h1").contains("Sign up");
    })
    it ("5",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        //cy.get(".row").find("p").contains("Have an account?");
        cy.get(".row").find("h1").contains("Sign up").next();
    })
    it ("6",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".form-group").find("input").first();
        //cy.get("[type=text]");
    })
    it ("7",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".form-group").find("input").eq(1);
        //cy.get("[type=email]");
    })
    it ("8",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".form-group").find("input").last();
        //cy.get("[type=password]");
    })
    it ("9",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        //cy.get(".btn");
        cy.get("[type=submit]");
    })
    it ("10",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".container").last().contains("conduit");
        
    })
    it ("11",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".attribution");
        //cy.get(".container").last().contains("conduit").next();
        
    })
})
