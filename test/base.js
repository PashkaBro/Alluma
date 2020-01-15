class base {
    open(){
     browser.url('/');
}

    moderLogin(){
        $('#email').setValue('moderator'); //existing email
        $('#pass').setValue('moder@1234'); //correct pass
        $('.btn-primary').click();
        $('#btn-logout').waitForExist(3000);
    }

}
export default new Base();