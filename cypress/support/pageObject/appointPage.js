class appointPage{
    title = 'h2'
    makeAppointment = '#btn-make-appointment'
    toggleMenu = '#menu-toggle'
    sidebar = '.sidebar-brand > a'
    homeLink = 'nav#sidebar-wrapper > ul > li:nth-of-type(2) > a'
    historyLink = 'nav#sidebar-wrapper > ul > li:nth-of-type(3) > a'
    profileLink = 'li:nth-of-type(4) > a'
    logoutLink = 'li:nth-of-type(5) > a'
    bookButton = '#btn-book-appointment'
    calendar = '.datepicker.datepicker-dropdown.dropdown-menu.datepicker-orient-left.datepicker-orient-bottom'
    facilityLabel = 'div:nth-of-type(1) > .col-sm-2.col-sm-offset-3.control-label'
    applyLabel = '.checkbox-inline'
    programLabel = 'div:nth-of-type(3) > .col-sm-2.col-sm-offset-3.control-label'
    dateLabel = 'div:nth-of-type(4) > .col-sm-2.col-sm-offset-3.control-label'
    commentLabel = 'div:nth-of-type(5) > .col-sm-2.col-sm-offset-3.control-label'
    facilityField = '#combo_facility'
    applyField = '#chk_hospotal_readmission'
    radioButton1 = '#radio_program_medicare'
    radioButton2 = '#radio_program_medicaid'
    radioButton3 = '#radio_program_none'
    commentField = '#txt_comment'
    dateField = '#txt_visit_date'
    calendarIcon = '.glyphicon.glyphicon-calendar'
    dateNumber = 'tr:nth-of-type(4) > td:nth-of-type(5)'
    confirmTitle = 'h2'
    confirmSubtitle = '.lead'
    facilityLabelSummary = 'div:nth-of-type(2) > .col-xs-4 > label'
    facilitySummary = '#facility'
    applyLabelSummary = 'div:nth-of-type(3) > .col-xs-4 > label'
    applySummary = '#hospital_readmission'
    programLabelSummary = 'div:nth-of-type(4) > .col-xs-4 > label'
    programSummary = '#program'
    dateLabelSummary = 'div:nth-of-type(5) > .col-xs-4 > label'
    dateSummary = '#visit_date'
    commentLabelSummary = 'div:nth-of-type(6) > .col-xs-4 > label'
    commentSummary = '#comment'
    homepageButton = '.btn.btn-default'

    commentType(value){
        cy.isTyped(this.commentField, value)
    }

    dateType(value){
        cy.isTyped(this.dateField, value)
    }
}
module.exports = new appointPage()