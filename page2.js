const backBtn = document.getElementById('backButton')
const doneBtn = document.getElementById('done')

doneBtn.addEventListener('click',function(){
    window.location.href = 'page3.html'
})
backBtn.addEventListener('click',function(){
    window.location.href = 'index.html'
})