/*
const a="hello world";
const b= {
  name:"abhi",
  printSum:()=>{
    console.log("singh");
  }
};
console.log(a);
//Number,string,boolean,undefined...primitive datatype

console.log(b);
b.added="value is added";
console.log(b);

//but we can not add in a

*/

//pass by reference example in object

/*
const p= {
  name:"Abhi",
  surname:"singh",
};

const q= p;

console.log(p);
console.log(q);

p.name="changed";

console.log(p);
console.log(q);

q.name="lodu lalit";
console.log(p);
console.log(q);


*/

//pass by value example

/*
let a=21;
let b=a;
console.log(a);
console.log(b);
a=29;
console.log(a);
console.log(b);

*/

// how to create object 

// if only one object need
/*
const RomanReigns={
  height:238,
  weight:70,
  quote:()=>{
    console.log("head of the table");
  },
};

console.log(RomanReigns);

*/


// if more than two object need then we use like fxn


/*

function wweSuperStar(a,b,quote){
  return {
    height:a,
    weight:b,
    quot:()=>{
      console.log(quote);
    },
  };

}

const temp=wweSuperStar(20,139,"sing is king");

console.log(temp);

*/

// another way to create object by constructor fxn

/*
 function Star(weight,height) {
  this.weight=weight;
  this.height=height;
 }

 const RomanReigns = new Star(234,187);
 console.log(RomanReigns);

 */

 //if use constructor then in output it shoe easily otherwise if we open prototype thwn show

 function Star(weight,height) {
  this.weight=weight;
  this.height=height;
 }

 const RomanReigns = new Star(234,187);
 console.log(RomanReigns.constructor);

// we can also create array and function by using new keyword as same as object

//how to create 100 enemy and their size  is different to each other but speed is same

function Enemy(size,speed){
  this.size=size;
  this.speed=speed;
}
const Enemy2=new Enemy(265,185);
const enemies = [];
for(let i=0;i<100;i++)
{
  enemies.push(new Enemy(Math.random()*100,21));
}
console.log(enemies);