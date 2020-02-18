let shadow = document.getElementById('shadow')
let link = document.getElementById("ball").addEventListener('click',
    function (e) {
        e.target.classList.add('clicked');
        shadow.classList.add('clicked-shadow');
    })