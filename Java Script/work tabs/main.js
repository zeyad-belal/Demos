let switcher =document.querySelectorAll(".switcher li")

let gallery = document.querySelectorAll(".gallery img")

switcher.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        
        switcher.forEach((swi)=>{
            swi.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        gallery.forEach((img)=>{
            img.style.display ="none"
        })
        let chosens = Array.from(document.querySelectorAll(e.currentTarget.dataset.cat)) 
        chosens.forEach((one)=>{
            one.style.display = "block"
        })
    })
})