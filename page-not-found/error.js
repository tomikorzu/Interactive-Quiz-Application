const body = document.querySelector('body')
setTimeout(function(){
    body.classList.add('preload')
}, 500)

const backBtn = document.getElementById('back-error')
backBtn.addEventListener('click', function(){
    body.classList.remove('preload')
    setTimeout(function(){
        window.location.href = '../index.html'
    }, 400)
})