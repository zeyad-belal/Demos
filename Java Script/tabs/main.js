// let tabs = document.querySelectorAll(".tabs li");

// let content = document.querySelectorAll(".content > div");

// tabs.forEach((ele) => {
//   ele.addEventListener("click", (e) => {
//     tabs.forEach((ele) => {
//       ele.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");

//     content.forEach((ele) => {
//       ele.style.display = "none";
//     });
//     document.querySelector(e.currentTarget.dataset.num).style.display = "block";
//   });
// });

const arr1 = [6,4,3,2,1,7] 

function findPairSum(arr,sum){
  let mySet= new Set()

  for(let i = 0; i< arr.length; i++){
    if(mySet.has(sum - arr[i])){
      return true
    }
    mySet.add(arr[i])
  }
  return false
}

console.log(findPairSum(arr1,9))