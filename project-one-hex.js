const btn = document.querySelector('.btn'),
        span = document.querySelector('.span'),
        body = document.body;

let colors = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f',]


let getRandomColor = ()=>{
    return Math.floor(Math.random() * colors.length);
}



let changeBody =()=>{
    let hex = '#'
    for (i=0;i<6;i++){
    let random = getRandomColor()
    hex += colors[random]}
    
    body.style.background = hex
    span.textContent = hex

}
