import MyAccountPage from '../pages/myAccount.page';
import {assert} from 'chai';
import data from '../data/login.username';

// @ts-ignore
describe('my account page appearance', () => {
    it('opens by clicking button in the header', () => {
      MyAccountPage.openBase();
      MyAccountPage.moderLogin();
      MyAccountPage.pageAppear();   
    })

    it('consists of First Name', () => {
      MyAccountPage.firstNameConsist();
    })

    it('consists of Last Name', () => {
      MyAccountPage.lastNameConsist();
    })

    it('consists of Username', () => {
      MyAccountPage.usernameConsist();
    })

    it('consists of Nickname', () => {
      MyAccountPage.nicknameConsist();  
    })

    it('consists of Rating', () => {
      MyAccountPage.ratingConsist();
    })
    
    it('consists of Visits', () => {
      MyAccountPage.visitsConsist();
    })

    it('consists of Wins', () => {
      MyAccountPage.winsConsist();
    })

    it('consists of Loses', () => {
      MyAccountPage.losesConsist();
    })

    it('consists of Male radio button', () => {
      MyAccountPage.maleBtnConsist();
    })

    it('consists of Famale radio button', () => {
      MyAccountPage.firstNameConsist();
    })

    it('consists of Password text field', () => {
      MyAccountPage.passFieldConsist();
    })

    it('consists of Update button', () => {
      MyAccountPage.usernameConsist();
    })

    it('consists of Revert button', () => {
      MyAccountPage.revertBtnConsist();
    })

    it('First Name contain current information', () => {
      MyAccountPage.firstNameInfo();    
    })

    it('Last Name contain current information', () => {
      MyAccountPage.lastNameInfo();  
    })

    it('Username contain current information', () => {
      MyAccountPage.usernameInfo();  
    })

    it('Nickname contain current information', () => {
      MyAccountPage.nicknameInfo();  
    })

    it('First Name max length is 100 symbols', () => {
      MyAccountPage.firstNameMaxLength();    
    })

    it('Last Name max length is 100 symbols', () => {
      MyAccountPage.lastNameMaxLength();    
    })

    it('Username max length is 100 symbols', () => {
      MyAccountPage.usernameMaxLength();
    })

    it('Nickname max length is 100 symbols', () => {
      MyAccountPage.nicknameMaxLength();
    })

    it(' First Name accept all letters, digits and special characters', () => {
      MyAccountPage.usernameAccept();
    })

    it('Last Name accept all letters, digits and special characters', () => {
      MyAccountPage.lastNameAccept();    
    })

    it('Username accept all letters, digits and special characters', () => {
       MyAccountPage.usernameAccept();
    })

    it('Nickname accept all letters, digits and special characters', () => {
      MyAccountPage.lastNameAccept();
    })

    it('First Name 101 symbol rejection', () => {
      MyAccountPage.firstnameRejection();
    })

    it('Last Name 101 symbol rejection', () => {
      MyAccountPage.lastnameRejection();
    })

    it('Username 101 symbol rejection', () => {
      MyAccountPage.usernameRejection();
    })

    it('Nickname 101 symbol rejection', () => {
      MyAccountPage.nicknameRejection();
    })

    it('Consists of statistics column Raiting', () => {
      MyAccountPage.raitingConsist(); 
    })

    it('Consists of statistics column Visits', () => {
      MyAccountPage.visitsConsist();
    })

    it('Consists of statistics column Wins', () => {
      MyAccountPage.winsConsist(); 
    })

    it('Consists of statistics column Loses', () => {
      MyAccountPage.losesConsist();        
    })

    it('Consists of statistics column Raiting and value is a Number', () => {
      MyAccountPage.raitingValue();
    })

    it('Consists of statistics column Visits and value is a Number', () => {
      MyAccountPage.visitsValue(); 
    })

    it('Consists of statistics column Wins and value is a Number', () => {
      MyAccountPage.winsValue();    
    })

    it('Consists of statistics column Loses and value is a Number', () => {
      MyAccountPage.losesValue();    
    })

    it('Consists of radio button Male', () => {
      MyAccountPage.maleBtnConsist();
    })

    it('Consists of radio button Female', () => {
      MyAccountPage.femaleBtnConsist();
    })

    it('Consists of Password Field with title Password', () => {
      MyAccountPage.titlePassField();  
    })

    it('Consists of Password Field with show/hide password toggle', () => {
      MyAccountPage.togglePassField(); 
    })

    it('Consists of Password Field with bulleted/regular text field', () => {
      MyAccountPage.passFieldwith();
    })

    it('Password Field max length is 100 symbols', () => {
      MyAccountPage.passFieldMax();
    })

    it('Password Field accept all letters, digits and special characters', () => {
      MyAccountPage.passFieldAccept();
    })

    it('Password Field 101 symbol rejection', () => {
      MyAccountPage.passFieldRejection();
    })

    it('consists of Update button', () => {
      MyAccountPage.updateBtnConsist();
    })

    it('Update button with blue background', () => {
      MyAccountPage.updateBtnBack(); 
    })

    it('Update button with text Update', () => {
      MyAccountPage.updateBtnText();
    })

    it('Update button text color is white', () => {
      MyAccountPage.updateBtnColor();
    })


    it('Update button font size', () => {
      MyAccountPage.updateBtnFontSize();
    })

    it('Update button font family', () => {
      MyAccountPage.updateBtnFontFamily();
    })

    it('consists of Revert button', () => {
      MyAccountPage.revertBtnConsist();
    })

    it('Revert button with blue background', () => {
      MyAccountPage.revertBtnBack();
    })

    it('Revert button with text Revert', () => {
      MyAccountPage.revertBtnText();
    })

    it('Revert button text color is white', () => {
      MyAccountPage.revertBtnColor();
    })


    it('Revert button font size', () => {
      MyAccountPage.revertBtnFontSize();
    })

    it('Revert button font family', () => {
      MyAccountPage.revertBtnFontFamily
    })

})

     


