/*--------
const input = document.getElementById("myinput");
const btn = document.getElementById("mybtn");

const btnclick = ()=>{
 // alert(input.value); only alert whatever we type
 sessionStorage.setItem("key1",input.value);
}
btn.addEventListener("click",btnclick);

if(sessionStorage.getItem("key1"))
{
  alert(sessionStorage.getItem("key1"));
}
//if we dont use alert in if condition then when we copy link address and open in other tab it show alerty message null....so we use condition  here that is if value present in session then only show popup 
 ------------*/


 /*------- REMOVE WHATEVER WE STORE 
const input = document.getElementById("myinput");
const btn = document.getElementById("mybtn");
const deletebtn = document.getElementById("delete");

const btnclick = ()=>{
 // alert(input.value); only alert whatever we type
 sessionStorage.setItem("key1",input.value);
}
btn.addEventListener("click",btnclick);

deletebtn.addEventListener("click",()=>{
  sessionStorage.removeItem("key1");
  //sessionStorage.clear();//use to remove all key value
})

if(sessionStorage.getItem("key1"))
{
  alert(sessionStorage.getItem("key1"));
}
---------------*/


// LOCAL STORAGE  

/*------
const input = document.getElementById("myinput");
const btn = document.getElementById("mybtn");
const deletebtn = document.getElementById("delete");

const btnclick = ()=>{
 // alert(input.value); only alert whatever we type
 localStorage.setItem("key1",input.value);
}
btn.addEventListener("click",btnclick);

deletebtn.addEventListener("click",()=>{
  localStorage.removeItem("key1");
  //sessionStorage.clear();//use to remove all key value
})

if(localStorage.getItem("key1"))
{
  alert(localStorage.getItem("key1"));
}

----*/

//USE SRING TO ADD IN LOCAL FILE
const input = document.getElementById("myinput");
const btn = document.getElementById("mybtn");
const deletebtn = document.getElementById("delete");

const btnclick = ()=>{
 // alert(input.value); only alert whatever we type
 localStorage.setItem("key1",JSON.stringify({name: "Abhi", surname:"singh"}));
}
btn.addEventListener("click",btnclick);

deletebtn.addEventListener("click",()=>{
  localStorage.removeItem("key1");
  //sessionStorage.clear();//use to remove all key value
})

if(localStorage.getItem("key1"))
{
  alert(localStorage.getItem("key1"));
}
