import { assert } from 'chai';
import Base from './base';
import sel from '../selectors/myAccount.sel';
import exp from '../expected/myAccount.exp'
import data from '../data/login.username';
import baseExp from '../expected/base.exp';



class MyAccountPage extends Base {

    // randomStringMyAccount(len) {
        // var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" + '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\' ;
        // return [...Array(len)].reduce(a=>a+p[~~(Math.random()*p.length)],''); //For each element in the array: pick a random character from p and add it to a string
      // }

      pageAppear(){
        const elemButn = $(sel.myAccBtn);
        elemButn.click();
        let uniqelemonAccount = $(sel.titlePass);
        uniqelemonAccount.waitForDisplayed();

        assert.isTrue(uniqelemonAccount.isDisplayed());
      }

      firstNameConsist(){
        const firstName = $(sel.firstNameInput);
        assert.isTrue(firstName.isDisplayed());
      }

      lastNameConsist(){
        const lastName = $(sel.lastNameInput);
        assert.isTrue(lastName.isDisplayed());
      }

      usernameConsist(){
        const username = $(sel.usernameInput);
        assert.isTrue(username.isDisplayed());
      }

      nicknameConsist(){
        const nickname = $(sel.nicknameInput);
        assert.isTrue(nickname.isDisplayed());
      }

      ratingConsist(){
        const rating = $(sel.titleRating);
        assert.isTrue(rating.isDisplayed());
      }

      visitsConsist(){
        const visits = $(sel.titleVisits);
        assert.isTrue(visits.isDisplayed());
      }

      winsConsist(){
        const wins = $(sel.titleWins);
        assert.isTrue(wins.isDisplayed());
      }

      losesConsist(){
        const loses = $(sel.titleLoses);
        assert.isTrue(loses.isDisplayed());
      }

      maleBtnConsist(){
        const maleBtn = $(sel.maleRadioBtn);
        assert.isTrue(maleBtn.isDisplayed());
      }

      femaleBtnConsist(){
        const femaleBtn = $(sel.femaleRadioBtn);
        assert.isTrue(femaleBtn.isDisplayed());
      }

      passFieldConsist(){
        const passField = $(sel.passField);
        assert.isTrue(passField.isDisplayed());
      }

      updateBtnConsist(){
        const updateBtn = $(sel.updateBtn);
        assert.isTrue(updateBtn.isDisplayed());
      }

      revertBtnConsist(){
        const revertBtn = $(sel.revertBtn);
        assert.isTrue(revertBtn.isDisplayed());
      }

      firstNameInfo(){
        const firstNameCont = $(sel.firstNameInput).getValue();
        assert.equal,(firstNameCont, data.moderLogin);
      }

      lastNameInfo(){
        let lastNameCont = $(sel.lastNameInput).getValue();
        assert.equal,(lastNameCont, data.moderLogin);
      }

      usernameInfo(){
        let usernameCont = $(sel.usernameInput).getValue()
        assert.equal,(usernameCont, data.moderPass);
      }

      nicknameInfo(){
        let nicknameCont = $(sel.nicknameInput).getValue();
        assert.equal,(nicknameCont, data.moderLogin);
      }

      firstNameMaxLength(){
        const firstNameMaxLength = $(sel.firstNameInput).getAttribute('maxlength');
        assert.equal(firstNameMaxLength, exp.firstNameMaxLength);
      }

      lastNameMaxLength(){
        const lastNameMaxLength = $(sel.lastNameInput).getAttribute('maxlength');  
        assert.equal(lastNameMaxLength, exp.lastNameMaxLength);
      }

      usernameMaxLength(){
        const userNameMaxLength = $(sel.usernameInput).getAttribute('maxlength')
        assert.equal(userNameMaxLength, exp.usernameMaxLength);
      }

      nicknameMaxLength(){
        const nickNameMaxLength = $(sel.nicknameInput).getAttribute('maxlength');
        assert.equal(nickNameMaxLength, exp.nicknameMaxLength);
      }

      firstNameAccept(){
        const value = this.randomString(100);
        $(sel.firstNameInput).clearValue();
        $(sel.firstNameInput).addValue(value);
        let accepted = $(sel.firstNameInput).getValue();
        assert.equal(value, accepted);
      }

      lastNameAccept(){
        const value = this.randomString(100);
        $(sel.lastNameInput).clearValue();
        $(sel.lastNameInput).addValue(value);
        let accepted = $(sel.lastNameInput).getValue();
        assert.equal(value, accepted);
      }

      usernameAccept(){
        const value = this.randomString(100);
        console.log(value);
        $(sel.usernameInput).clearValue();
        $(sel.usernameInput).addValue(value);
        let accepted = $(sel.usernameInput).getValue();
        assert.equal(value, accepted);
      }

      nicknameAccept(){
        const value = this.randomString(101)
        $(sel.nicknameInput).clearValue();
        $(sel.nicknameInput).addValue(value);
        let accepted = $(sel.nicknameInput).getValue();
        assert.equal(value, accepted);
      }

      firstnameRejection(){
        $(sel.firstNameInput).setValue(this.randomString(101));
        let finalinput = $(sel.firstNameInput).getValue().length;
        assert.equal(finalinput, 100);
      }

      lastnameRejection(){
        $(sel.lastNameInput).setValue(this.randomString(101));
        let finalinput = $(sel.lastNameInput).getValue().length;
        assert.equal(finalinput, 100);
      }

      usernameRejection(){
        $(sel.usernameInput).setValue(this.randomString(101));
        let finalinput = $(sel.usernameInput).getValue().length;
        assert.equal(finalinput, 100);
      }

      nicknameRejection(){
        $(sel.nicknameInput).setValue(this.randomString(101));
        let finalinput = $(sel.nicknameInput).getValue().length;
        assert.equal(finalinput, 100);
      }

      raitingConsist(){
        const raiting = $(sel.titleRating);
        assert.equal(raiting.isDisplayed(), true);
      }

      visitsConsist(){
        const visits = $(sel.titleVisits);
        assert.equal(visits.isDisplayed(), true);
      }

      winsConsist(){
        const wins = $(sel.titleWins);
        assert.equal(wins.isDisplayed(), true);
      }

      losesConsist(){
        const loses = $(sel.titleLoses);
        assert.equal(loses.isDisplayed(), true);
      }

      raitingValue(){
        const value = $(sel.valueRating).getText();
        assert.equal(typeof parseInt(value), exp.typeOfvalue);
      }

      visitsValue(){
        const value = $(sel.valueVisits).getText();
        assert.equal(typeof parseInt(value), exp.typeOfvalue);
      }

      winsValue(){
        const value = $(sel.valueWins).getText();
        assert.equal(typeof parseInt(value), exp.typeOfvalue);
      }

      losesValue(){
        const value = $(sel.valueLoses).getText();
        assert.equal(typeof parseInt(value), exp.typeOfvalue);
      }

      maleBtnConsist(){
        const male = $(sel.maleRadioBtn);
        assert.equal(male.isDisplayed(), true);
      }

      femaleBtnConsist(){
        const female = $(sel.femaleRadioBtn);
        assert.equal(female.isDisplayed(), true);
      }

      titlePassField(){
        const titlePass = $(sel.titlePass);
        assert.equal(titlePass.isDisplayed(), true);
      }

      togglePassField(){
        const showHidePass = $(sel.showHidePass);
        assert.equal(showHidePass.isDisplayed(), true);
      }
      
      passFieldwith(){
        const textFieldPass = $(sel.passField);
        assert.equal(textFieldPass.isDisplayed(), true);
      }

      passFieldMax(){
        const passMaxLength = $(sel.passField).getAttribute('maxlength'); 
        assert.equal(passMaxLength, exp.passFieldMaxLength);
      }

      passFieldAccept(){
        const value = this.randomString(100);
        $(sel.passField).clearValue();
        $(sel.passField).addValue(value);
        const accepted = $(sel.passField).getValue();
        assert.equal(value, accepted);
      }

      passFieldRejection(){
        $(sel.passField).setValue(this.randomString(101));
        const finalinput = $(sel.passField).getValue().length;
        assert.equal(finalinput, 100);
      }

      updateBtnConsist(){
        const updateBtn = $(sel.updateBtn);
        assert.equal(updateBtn.isDisplayed(), true);
      }

      updateBtnBack(){
        const backGroundColor = $(sel.updateBtn).getCSSProperty('background-color');
        assert.equal(backGroundColor.value, exp.updateBtnBackground);
      }

      updateBtnText(){
        const updateButtonText = $(sel.updateBtn).getText();
        assert.equal(updateButtonText, exp.updateBtnText);
      }

      updateBtnColor(){
        const textColor = $(sel.updateBtn).getCSSProperty('color');
        assert.equal(textColor.value, exp.updateBtnColor);
      }

      updateBtnFontSize(){
        const fontSize = $(sel.updateBtn).getCSSProperty('font-size');
        assert.equal(fontSize.value, exp.updateBntFontSize);
      }

      updateBtnFontFamily(){
        const fontSize = $(sel.updateBtn).getCSSProperty('font-family').parsed.value[2];
        assert.equal(fontSize, exp.updateBtnFontFamily );
      }

      revertBtnConsist(){
        const updateBtn = $(sel.revertBtn);
        assert.equal(updateBtn.isDisplayed(), true);
      }

      revertBtnBack(){
        const backGroundColor = $(sel.revertBtn).getCSSProperty('background-color').value;
        assert.equal(backGroundColor, exp.revertBtnBackground );
      }

      revertBtnText(){
        const updateButtonText = $(sel.revertBtn).getText();
        assert.equal(updateButtonText, exp.revertBtnText );
      }

      revertBtnColor(){
        const textColor = $(sel.revertBtn).getCSSProperty('color').value;
        assert.equal(textColor, exp.revertBtnColor);
      }

      revertBtnFontSize(){
        const fontSize = $(sel.revertBtn).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.revertBtnFontSize );
      }

      revertBtnFontFamily(){
        const fontSize = $(sel.revertBtn).getCSSProperty('font-family').parsed.value[2];
        assert.equal(fontSize, exp.revertBtnFontFamily );
      }










    


}

export default new MyAccountPage();