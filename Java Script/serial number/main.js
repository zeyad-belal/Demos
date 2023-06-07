let generateBtn = document.querySelector(".generate")
let serial = document.querySelector(".serial")

generateBtn.onclick = function(){
    serial.innerHTML=""
    let randomDigits = [1,2,3,4,5,6,7,"-",">","[","*","&","%","#","@","A","B","C","D","V","W","Q"]
    let emptySerial =[]
    for(let i=0 ; i<10 ; i++){
        emptySerial.push(randomDigits[Math.floor(Math.random()*randomDigits.length)])
    }
    serial.appendChild(document.createTextNode(emptySerial.join("")))

    console.log(emptySerial.join(""))
}