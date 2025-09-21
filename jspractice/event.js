const heading = document.getElementById("heading");
const btn = document.getElementById("mybtn");
const box1 = document.getElementById("box1");


btn.addEventListener("click",()=> {
  box1.classList.add("classfordiv");
});

btn.addEventListener("contextmenu",(e)=> {
  e.preventDefault();
  btn.style.backgroundColor="purple";
});

box1.addEventListener("mouseover",()=> {
  btn.style.transform = "scale(1.1)";
  heading.style.backgroundColor="pink";
});

box1.addEventListener("mouseout",()=> {
  btn.style.transform = "";
  heading.style.backgroundColor="";
});