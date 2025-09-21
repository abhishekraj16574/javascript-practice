 const clock=document.querySelector(".clock");

 let sec=0,min=0,hr=0;
 let intervalId;

 const startStopwatch = ()=>{
 intervalId= setInterval(()=>{
   // second++;

   if(sec<59){
    sec++;
   }

   else if(min>=59){
    hr++;
    min=0;
   }
   else {
    sec=0;
    min++;
   }

   const seconds = sec.toString().padStart(2,"0");
   
   const minutes=String(min).padStart(2,"0");
   
   const hours=String(hr).padStart(2,"0");

    //console.log(`${hours}:${minutes}:${seconds}`);

    clock.innerText = `${hours}:${minutes}:${seconds}`;
  
  },1000);
 };

 const stopStopwatch = () =>{
   clearInterval(intervalId);
 };