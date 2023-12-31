import footer from '../../support/pageObject/footer'
import loginPage from '../../support/pageObject/loginPage'
import appointPage from '../../support/pageObject/appointPage'
const userData = require('../../fixtures/3-katalon-demo-cura/loginData.json')
const bookData = require('../../fixtures/3-katalon-demo-cura/appointData.json')

describe('katalon demo cura - footer', () => {
  beforeEach(() => {
    cy.visit('')
    cy.get(loginPage.toggleMenu).click()
    cy.get(loginPage.loginLink).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/profile.php#login')
  })

  it('login page - "info@katalon.com" button displayed', () => {
    cy.verifyVisibilityAndContent(footer.mailLink, 'info@katalon.com')
    // cy.get(footer.mailLink).click()
  })
  it('appointment page - "info@katalon.com" button displayed', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    cy.verifyVisibilityAndContent(footer.mailLink, 'info@katalon.com')
    // cy.get(footer.mailLink).click()
  })
  it('appointment summary page - "info@katalon.com" button displayed', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    appointPage.dateType(bookData.date)
    cy.get(appointPage.bookButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/appointment.php#summary')
    cy.verifyVisibilityAndContent(appointPage.confirmTitle, 'Appointment Confirmation')
    cy.verifyVisibilityAndContent(footer.mailLink, 'info@katalon.com')
    // cy.get(footer.mailLink).click()
  })
  // recommendation: facebook icon should've linked user to a facebook link
  it('login page - facebook icon button clicked', () => {
    cy.get(footer.facebook).click()
  })
  it('appointment page - facebook icon button clicked', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    cy.get(footer.facebook).click()
  })
  it('appointment summary page - facebook icon button clicked', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    appointPage.dateType(bookData.date)
    cy.get(appointPage.bookButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/appointment.php#summary')
    cy.verifyVisibilityAndContent(appointPage.confirmTitle, 'Appointment Confirmation')
    cy.get(footer.facebook).click()
  })
  // recommendation: twitter icon should've linked user to a twitter link
  it('login page - twitter icon button clicked', () => {
    cy.get(footer.twitter).click()
  })
  it('appointment page - twitter icon button clicked', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    cy.get(footer.twitter).click()
  })
  it('appointment summary page - twitter icon button clicked', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    appointPage.dateType(bookData.date)
    cy.get(appointPage.bookButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/appointment.php#summary')
    cy.verifyVisibilityAndContent(appointPage.confirmTitle, 'Appointment Confirmation')
    cy.get(footer.twitter).click()
  })
  // recommendation: dribble icon should've linked user to a dribble link
  it('login page - dribble icon button clicked', () => {
    cy.get(footer.dribble).click()
  })
  it('appointment page - dribble icon button clicked', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    cy.get(footer.dribble).click()
  })
  it('appointment summary page - dribble icon button clicked', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    appointPage.dateType(bookData.date)
    cy.get(appointPage.bookButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/appointment.php#summary')
    cy.verifyVisibilityAndContent(appointPage.confirmTitle, 'Appointment Confirmation')
    cy.get(footer.dribble).click()
  })
  it('login page - scrolled to top button clicked', () => {
    cy.scrollTo('bottom')
    cy.get(footer.toTop).click()
  })
  it('appointment page - scrolled to top button clicked', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    cy.scrollTo('bottom')
    cy.get(footer.toTop).click()
  })
  it('appointment summary page - scrolled to top button clicked', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    appointPage.dateType(bookData.date)
    cy.get(appointPage.bookButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/appointment.php#summary')
    cy.verifyVisibilityAndContent(appointPage.confirmTitle, 'Appointment Confirmation')
    cy.scrollTo('bottom')
    cy.get(footer.toTop).click()
  })
})