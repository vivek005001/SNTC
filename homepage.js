const loginBtn = document.getElementById('login')
const signUpBtn = document.getElementById('SignUp')
const crossLoginBtn = document.getElementById('crossLogin')
const crossSignUpBtn = document.getElementById('crossSignUp')
const bg = document.querySelector('.bg')
const loginDiv = document.getElementById('loginDiv')
const signUpDiv = document.getElementById('signUpDiv')
const SignUpA = document.getElementById('doSignUp')
const loginA = document.getElementById('doLogin')
const loginMainBtn = document.getElementById('loginMain')
const signUpMainBtn = document.getElementById('signUpMain')

loginMainBtn.addEventListener('click',function(){
    window.location.href = 'page2.html';
})

signUpMainBtn.addEventListener('click',function(){
    window.location.href = 'page2.html';
})


loginBtn.addEventListener('click', () => {
    loginDiv.style.display =
        loginDiv.style.display === 'none' || loginDiv.style.display === ''
        ?'flex'
        :'none';


        signUpBtn.disabled = true;
        loginBtn.disabled = true;

        signUpDiv.style.display = 'none';


});

SignUpA.addEventListener('click',(event)=>{
    event.preventDefault();
    signUpDiv.style.display = 'flex';
    loginDiv.style.display = 'none';

})

loginA.addEventListener('click',(event)=>{
    event.preventDefault();
    loginDiv.style.display = 'flex';
    signUpDiv.style.display = 'none';

})

crossLoginBtn.addEventListener('click',() => {
    loginDiv.style.display = 'none';
    signUpBtn.disabled = false;
    loginBtn.disabled = false;

})

signUpBtn.addEventListener('click', () => {
    signUpDiv.style.display =
        signUpDiv.style.display === 'none' || signUpDiv.style.display === ''
        ?'flex'
        :'none';


        loginBtn.disabled = true;
        signUpBtn.disabled = true;

        loginDiv.style.display = 'none';


});

crossSignUpBtn.addEventListener('click',() => {
    signUpDiv.style.display = 'none';
    loginBtn.disabled = false;
    signUpBtn.disabled = false;
})



