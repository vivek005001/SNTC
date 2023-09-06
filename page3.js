const loginBtn = document.getElementById('login')
const signUpBtn = document.getElementById('signUp')
const cancelBtn = document.getElementById('cancel')
const confirmBtn = document.getElementById('paymentButton')

confirmBtn.addEventListener('click',function(){
    window.location.href = 'page4.html'
})

cancelBtn.addEventListener('click', function() {
    window.location.href = 'page2.html'
})

loginBtn.disabled = true;
signUpBtn.disabled = true;