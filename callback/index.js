/*

const  arr=[1,2,3,4,5];

function calculator(arr=[]){
  const ans=[];

  for (let i=0;i<arr.length;i++){
    ans.push(arr[i]*10);
  }
  console.log(ans);
}


function calculator1(arr=[]){
  const ans=[];

  for (let i=0;i<arr.length;i++){
    ans.push(arr[i]/10);
  }
  console.log(ans);
}
calculator(arr);
calculator1(arr);

*/

//USING CALLBACK 


const  arr=[1,2,3,4,5];

function calculator(arr=[],callback){
  const ans=[];

  for (let i=0;i<arr.length;i++){
    const element=callback(arr[i]);
    ans.push(element);
  }
  console.log(ans);
}

function multiply(a){
  return a*10;
}
function divide(a){
  return a/10;
}

calculator(arr,multiply);
calculator(arr,divide);


calculator(arr,(a)=> a+10);  // this arrow fxn also word and we have no need to create extra method like multiply and divide

//  PROMISES

const array=[];

const fetchData=(array=[])=>{
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      array.push({name:"Abhi"});
      if(arr.length > 0)resolve("Data fetched");
      else reject("Some technical Error");  

    },2000);
  });
};

fetchData(arr)
.then((message) => console.log(message))
.catch(()=> console.log(mesage))
.finally(() => console.log("work fin"));

