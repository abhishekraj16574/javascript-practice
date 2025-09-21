const url="https://catfact.ninja/fact";
const h1=document.querySelector("h1");
/*
const fetchdata=()=>{
  fetch(url).then((data)=>{
    console.log(data);
  });
};
fetchdata();
*/

/*
console.log("A");

const fetchdata=()=>{
   console.log("B");
  fetch(url).then((response)=>{
     console.log("D");
    console.log(response);
    return response.json();
  })
  .then((data)=>{
     console.log("E");
    console.log(data);
  });
};
fetchdata();

console.log("Z");

*/

//ASYNC AWAIT IN JSf


/*


console.log("A");
const fetchData1= async ()=>{
  console.log("B");
  const response1= await fetch(url);
  console.log("C");
  const data1= await response1.json();
   console.log("D");

  console.log(data1);
  h1.innerText=data1.fact;
   console.log("E");
};
fetchData1(); 
 console.log("Z");
 
*/


 //error handling

 /*


 const fetchData= async ()=>{
  try{
    const response=await fetch(url);
    const data=await response.json();
    h1.innerText=data.fact;
  } catch (error){
    console.log(error);
  } finally {
    console.log("FINAL DONE")
  }
 };
 fetchData();

 */

 // BROWSER OBJECT MODEL


 //console.log(navigator);
 /*

 navigator.geolocation.getCurrentPosition(
  (d)=>{
    //console.log(d);
    console.log(d.coords.latitude);
  },
  (error)=> console.log(error)
 );

 */
 //console.log(history);

 //console.log(location);
 console.log(location.protocol);
 console.log(location.hostname);
 console.log(location.port);
 console.log(location.pathname);
 console.log(location.host);
 console.log(location.href);
 