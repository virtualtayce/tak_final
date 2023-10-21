class loginPage{
    toggleMenu = '#menu-toggle'
    sidebar = '.sidebar-brand > a'
    homeLink = 'nav#sidebar-wrapper > ul > li:nth-of-type(2) > a'
    loginLink = 'nav#sidebar-wrapper > ul > li:nth-of-type(3) > a'
    makeAppointment = '#btn-make-appointment'
    username = '#txt-username'
    password = '#txt-password'
    loginButton = '#btn-login'
    errorMessage = '.lead.text-danger'

    usernameType(value){
        cy.isTyped(this.username, value)
    }

    passwordType(value){
        cy.isTyped(this.password, value)
    }
}
module.exports = new loginPage()