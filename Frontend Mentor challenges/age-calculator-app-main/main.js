const btn= document.querySelector("img")
const day = document.querySelector(".day")
const month = document.querySelector(".month")
const year = document.querySelector(".year")

const line= document.querySelector("hr")
const form= document.querySelector("form")


const yearsRes = document.querySelector(".years-res")
const monthsRes = document.querySelector(".months-res")
const daysRes = document.querySelector(".days-res")


btn.addEventListener("click" , (e)=>{
  if(!day.value || !month.value || !year.value){
    return
  }
  // validate
  if(day.value < 0 || day.value > 31 || month.value < 0 || month.value > 12 || year.value < 0 || year.value > new Date().getFullYear()){
    return
  }
  const userDay = +(day.value);
  const userMonth = +(month.value) - 1;
  const userYear = +(year.value);

  const userBirthDay = new Date(userYear, userMonth, userDay);
  const currentDate = new Date();
  const userAgeInMilli = currentDate - userBirthDay;

  const seconds = userAgeInMilli / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  const years = Math.floor(days / 365);
  const remainingDays = Math.floor(days % 365);

  const months = Math.floor(remainingDays / 30); 
  const daysWithinMonth = Math.floor(remainingDays % 30);

  yearsRes.innerText =  years;
  monthsRes.innerText = months;
  daysRes.innerText = daysWithinMonth;


  if(typeof years === 'number' 
  && typeof months === 'number'
  && typeof daysWithinMonth === 'number'
  ){
    btn.style.right= "45%"
    line.style.width= "50%"
    form.style.width= "400px"
  }
});
