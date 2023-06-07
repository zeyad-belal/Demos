fetch("https://api.currencyfreaks.com/latest?apikey=ab6fc883af2a447986167adfd26b81bb").then((result)=>{
    console.log(result)
    let myData = result.json()
    return myData
}).then((currency)=>{
    let  amount =document.querySelector(".amount")
    let egy =document.querySelector(".egp span")
    let sar =document.querySelector(".sar span")

    egy.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"])
    sar.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"])
})