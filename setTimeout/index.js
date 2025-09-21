const btn=document.querySelector("button");

const printName = (name)=>{

  console.log(`welcome , ${name}`);
};

const customTimeout=setTimeout(printName("Abhi Singh jii"),10000);

btn.addEventListener("click",()=>{
  clearTimeout(customTimeout);  //we need to give here id
});


//same syntax for setinterval or clear interval 
