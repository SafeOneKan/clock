
const shand = document.querySelector('.h1')
const mhand = document.querySelector('.h2')
const hhand = document.querySelector('.h3')


setInterval(clock,1000)
clock()
function clock(){
    let date = new Date()
    let seconds = date.getSeconds() / 60
    let minutes =(seconds + date.getMinutes()) /60
    let hours = (minutes + date.getHours()) /12

    time(shand,seconds)
    time(mhand,minutes)
    time(hhand,hours)
}


function time(sbaa,lwaqt){
    sbaa.style.setProperty("--rotatio",lwaqt*360 + "deg" )
    console.log(lwaqt)
}