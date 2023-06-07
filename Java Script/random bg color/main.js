let hexaDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


let randomHexa = hexaDigits[Math.floor(Math.random()*hexaDigits.length)]


let randomColor =[]

for(let i=0 ; i<6 ; i++){
    randomColor.push((hexaDigits[Math.floor(Math.random()*hexaDigits.length)]))
}
console.log(randomColor.join(""))

let finalColor =`#${randomColor.join("")}`

document.body.append(document.createTextNode(finalColor))

document.body.style.backgroundColor = finalColor
