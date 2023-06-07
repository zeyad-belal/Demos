let tabs = document.querySelectorAll(".tabs li");

let content = document.querySelectorAll(".content > div");

tabs.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    tabs.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    content.forEach((ele) => {
      ele.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.num).style.display = "block";
  });
});
