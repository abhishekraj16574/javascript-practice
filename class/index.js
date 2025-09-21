// in a class if we want to declare private variable then use # 
/*
class Myclass{
  #a=30;
  #b=20;
}
const obj=new Myclass();
console.log(obj.a);  //it show undefined because we canot access private data directly,we access within class only and if we want to  change value then use constructor and we can access by using method or property(ex get ,set).
*/


class Myclass{
  #a=30;
  #b=20;

constructor(value1,value2){
this.#a=value1;
this.#b=value2;
}
  
}
const obj=new Myclass(59,345);
console.log(obj);

//public 
/*  
class Myclass1{
  p=30;
  q=20;
}
const obj1=new Myclass1();
console.log(obj1);
console.log(obj1.p); //we can access public member outside the class
*/

// USE OF SET AND GET PROPERTY

class Myclass2{
  #c;
  #d;
  constructor(value1,value2){
    this.#c=value1;
    this.#d=value2;

  }
  get getData() {
    return this.#c;    
  }
  get getData1() {
    return this.#d;    
  }
  set setC(c){          //NO NEED TO CALL
    this.#c=c;

  }
   setD(d){
    this.#d=d;
  }
}

const object1=new Myclass2(33,44);
object1.setC=6204;
object1.setD(7295);  //HERE WE NEED TO CALL
console.log(object1.getData);
console.log(object1.getData1);

// INHERITANCE
//super()  IT IS A CONSTRUCTOR OF PARENT CLASS
class Electronic{
  #input;
  #output;
  #name;
  

  constructor(input,output,name){
    this.#input=input;
    this.#output=output;
    this.#name=name;
    
  }

  print(){
    console.log(this.#name);
  }
}

class Charger extends Electronic{
  #plugType;

  constructor(input,output,name,plugType){
    super(input,output,name);
    this.#plugType=plugType;
  }
}

const hpcharger=new Charger(213,2367,"hpCHARGER","Europien");
const hardisk=new Electronic(18,200,"hardisk");
hardisk.print();
hpcharger.print();