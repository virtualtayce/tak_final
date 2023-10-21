import loginPage from '../../support/pageObject/loginPage'
import appointPage from '../../support/pageObject/appointPage'
const userData = require('../../fixtures/3-katalon-demo-cura/loginData.json')

describe('katalon demo cura - login', () => {
  beforeEach(() => {
    cy.visit('')
    cy.get(loginPage.toggleMenu).click()
    cy.get(loginPage.loginLink).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/profile.php#login')
  })
  // ------------------------------------------------------------------------
  // positive scenarios
  // testing buttons in login page (footer buttons in footer.cy.js)
  it('"make appointment" button clicked', () => {
    cy.verifyVisibilityAndContent(loginPage.makeAppointment, 'Make Appointment')
    cy.get(loginPage.makeAppointment).click()
  })
  it('"cura healthcare" button clicked', () => {
    cy.get(loginPage.toggleMenu).click()
    cy.verifyVisibilityAndContent(loginPage.sidebar, 'CURA Healthcare')
    cy.get(loginPage.sidebar).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
  it('"home" button clicked', () => {
    cy.get(loginPage.toggleMenu).click()
    cy.verifyVisibilityAndContent(loginPage.homeLink, 'Home')
    cy.get(loginPage.homeLink).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
  it('success - valid username and password', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
  })
  it('success - logout', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#appointment')
    cy.verifyVisibilityAndContent(appointPage.title, 'Make Appointment')
    cy.get(loginPage.toggleMenu).click()
    cy.get(appointPage.logoutLink).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
  // ------------------------------------------------------------------------
  // negative scenarios
  it('failed - empty form', () => {
    cy.get(loginPage.loginButton).click()
    cy.verifyVisibilityAndContent(loginPage.errorMessage, 'Login failed! Please ensure the username and password are valid.')
  })
  it('failed - empty password and valid username', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    cy.get(loginPage.loginButton).click()
    cy.verifyVisibilityAndContent(loginPage.errorMessage, 'Login failed! Please ensure the username and password are valid.')
  })
  it('failed - empty username and valid password', () => {
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.verifyVisibilityAndContent(loginPage.errorMessage, 'Login failed! Please ensure the username and password are valid.')
  })
  it('failed - empty password and invalid username', () => {
    loginPage.usernameType(userData.loginFailed.username)
    cy.get(loginPage.loginButton).click()
    cy.verifyVisibilityAndContent(loginPage.errorMessage, 'Login failed! Please ensure the username and password are valid.')
  })
  it('failed - empty username and invalid password', () => {
    loginPage.passwordType(userData.loginFailed.password)
    cy.get(loginPage.loginButton).click()
    cy.verifyVisibilityAndContent(loginPage.errorMessage, 'Login failed! Please ensure the username and password are valid.')
  })
  it('failed - valid username and invalid password', () => {
    loginPage.usernameType(userData.loginSuccess.username)
    loginPage.passwordType(userData.loginFailed.password)
    cy.get(loginPage.loginButton).click()
    cy.verifyVisibilityAndContent(loginPage.errorMessage, 'Login failed! Please ensure the username and password are valid.')
  })
  it('failed - invalid username and valid password', () => {
    loginPage.usernameType(userData.loginFailed.username)
    loginPage.passwordType(userData.loginSuccess.password)
    cy.get(loginPage.loginButton).click()
    cy.verifyVisibilityAndContent(loginPage.errorMessage, 'Login failed! Please ensure the username and password are valid.')
  })
  it('failed - invalid username and password', () => {
    loginPage.usernameType(userData.loginFailed.username)
    loginPage.passwordType(userData.loginFailed.password)
    cy.get(loginPage.loginButton).click()
    cy.verifyVisibilityAndContent(loginPage.errorMessage, 'Login failed! Please ensure the username and password are valid.')
  })
})