let toggle = document.querySelector(".toggle")
let nav =document.querySelector("nav")
let closeMark =document.querySelector("nav .close")

toggle.onclick = function(){
    nav.classList.add("open")
}

closeMark.onclick = function(){
    nav.classList.remove("open")
}

document.onkeyup = function(e){
    if(e.key=== "Escape"){
    nav.classList.remove("open")
    } 
}

//cout user input 

let input = document.querySelector("input")
let progress = document.querySelector(".progress")
let count = document.querySelector(".count")


input.oninput = function () {
    count.innerHTML = this.maxLength - this.value.length
    count.innerHTML == 0 ? count.classList.add("zero") : count.classList.remove("zero");
    progress.style.width = `${this.value.length / this.maxLength *100}%`
}