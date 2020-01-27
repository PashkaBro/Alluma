import reminderPassword from '../pages/remind-password-page';

describe('Reminder page', function () {

    it('Reminder-page-is-displayed', function () {
        reminderPassword.remPageDisplayed();
    })
    
    it('Reminder-page-is-aligned', function () {
        reminderPassword.remPageAligned();
    })

    it('Email-text-field', function () {
        reminderPassword.emailFieldDisplayed();
    })

    it('Reminder-text', function () {
        reminderPassword.reminderTextDisplayed();
    })

    it('Reminder-password-button', function () {
        reminderPassword.reminderPasswordBtn();
    })    

    it('Email-field-contains-placeholder', function () {
        reminderPassword.emailFieldContainsPlaceholder();
    })

    it('Reminder-text-aligned', function () {
        reminderPassword.reminderTextAligned();
    })

    it('Reminder-text-size', function () {
        reminderPassword.reminderTextSize();
    })

    it('Reminder-text-color', function () {
        reminderPassword.reminderTextColor();
    })

    it('Reminder-text-name', function () {
        reminderPassword.reminderTextName();
    })

    it('Reminder-password-btn-color', function () {
        reminderPassword.reminderPasswordBtnColor();
    })

    it('Reminder-password-button-name', function () {
        reminderPassword.reminderPasswordBtnName();
    })

    it('Reminder-password-btn-text-color', function () {
        reminderPassword.reminderPasswordBtnTextColor();
    })

    it('Reminder-password-btn-align', function () {
        reminderPassword.reminderPasswordBtnAlign();
    })
        
})

