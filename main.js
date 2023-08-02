let mybtn = document.getElementById("menu-button");

let navbar = document.getElementsByTagName("nav");
console.log(navbar);
mybtn.addEventListener("click", (e) => {
  navbar[0].classList.add("open");
});
let xbtn = document.getElementById("menu-close");
xbtn.addEventListener("click", (e) => {
  navbar[0].classList.remove("open");
});
