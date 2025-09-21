console.log(Math.round(4.4));// jo nearest hoga usi ko print krega
console.log(Math.floor(4.4));//hamesa chota element ko print krega
console.log(Math.ceil(4.4));//hamesa bda wala ko
console.log(Math.trunc(4.4));//ye hamesa point ke bahar wala ko hta dega
console.log(Math.sign(4));//no. positive hai ya negative batayega
console.log(Math.pow(2,3));//power nikalega
console.log(Math.sqrt(25));
console.log(Math.abs(-37));//give absolute means +ve
console.log(Math.sin((90*3.1415)/180));//we can also do with cos tan..
console.log(Math.PI);
console.log(Math.max(2,3,65,7,54));
console.log(Math.random());//give random value between 0 and 1;
console.log(Math.random() * 10);
const a = Math.log2(8);//same for log10
console.log(a);

const b = new Date();
console.log(b);//give date 

const c = new Date(2012 , 11, 21);
console.log(c);//month start fron 0

const d = new Date(2012 , 11, 21, 5,21,90);
console.log(d);//we can also pass string in date fxn

const e = new Date();
console.log(e.getFullYear());
console.log(e.getHours());
console.log(e.getMonth());
console.log(e.getMilliseconds());