const btn = document.getElementById("btn2");
const nav = document.getElementById("nav");
const btn1 = document.getElementById("btn");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("active");
});

btn1.addEventListener("click", () => {
  document.body.style.backgroundColor = changeBg();
});

function changeBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
changeBg();
