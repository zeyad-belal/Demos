let scrollProg = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", (e) => {
  let scrolledSpace = document.documentElement.scrollTop;
  let scrollerWidth = (scrolledSpace / height) * 100;

  scrollProg.style.width = `${scrollerWidth}%`;
});
