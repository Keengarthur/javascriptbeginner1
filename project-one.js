const btn = document.querySelector('.btn'),
        span = document.querySelector('.span'),
        body = document.body;


body.style.background = 'orangered'
span.textContent = 'orangered'
let random = 4
colors = ['green','blue','green','red','black']

let getRandomColor = ()=>{
    return Math.floor(Math.random() * colors.length);
}

let changeBody = ()=>{
    random = getRandomColor()
    body.style.background = colors[random]
    span.textContent = colors[random].toUpperCase()
}

console.log(getRandomColor())