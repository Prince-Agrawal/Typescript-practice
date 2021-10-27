// Practice

import {Student1} from "./class.js";

console.log(new Student1(1, "Prince" , 2));


// declare variables by constructor - works only when access modifies are used
class Student2{

    //constructor for initializing values 
    constructor(
        public rollNo: string,
        readonly name: String,
        private age: number
    ){
    }

    // method to return detail 
    format() : string {
        return `Student Roll No is ${this.rollNo} , name is ${this.name} and age is ${this.age}`; 
    }
}

// array and objects start

let mob: number[]; // Array
let obj: object; // object

let anyType : any;

let mixedArray1: (string|number|boolean)[];
let mixedArray2: any[];

// array and objects end


// functions concep start 

let arrowFunction  = () :string =>{
        return 'Hey, I am a arrow function';
}

// specify function type
let fun1 : Function;
fun1 = ()=>{}

// optional parameter concept
// (optional parameter by ?)
let fun2 = (num1: number , num2: number , num3? : number)=>{
    return num1+num2;
}
fun2(1 , 2);

//function declearation having return type string
let fun3 : () => string;
fun3 = ()=>{
    return "string";
}


// functions concept end

//type defining;
type objWithName = {
    name: String,
    age: number,
    id: number
}
let myUser : objWithName;

//interface
interface Person{
    name: string;
    age: number;

    speak(a: string): string;
    spend(a: number): number;
}
let p1 : Person = {
    name: "Prince",
    age : 20,

    speak(text: string): string{
        return text;
    },
    spend(num: number): number{
        return num;
    }
}

// GENERICS
let addUID = <T extends object>(obj: T) => {
    let Uid = Math.floor(Math.random()*100);

    return {...obj , Uid};
}
let docOne = addUID({name: "Prince" , age: 20});
console.log(docOne);

//  with interfaces
interface Resource<T>{
    name: string,
    age: number,
    data: T
}
let myObj: Resource<string> = {
    name: "Prince",
    age: 20,
    data: "Generic"
};
console.log(myObj);

//ENUM

enum Index {BOOK0 , BOOK1 , BOOK2 , BOOK3 , BOOK4};
interface EnumExample{
    name: string,
    index: Index
}

let EE1 : EnumExample = {
    name: "1",
    index: Index.BOOK1 // so here it is taking index of BOOK1
}

let EE2 : EnumExample = {
    name: "2",
    index: Index.BOOK2 // so here it is taking index of BOOK2
}

// tuples  
let student: [string , number , boolean] ;
// student = [2 , "Prince" , false];
student = ["Prince" , 2 , false];