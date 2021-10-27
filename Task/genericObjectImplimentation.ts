// object declaration using interface
interface student<T>{
    name: string,
    age?: number,  // non required field
    data: T // generic type
}


// here data is a string array
let stu1: student<string[]> = {
    name: "Prince",
    age: 20,
    data: ["cricket" , "Football"]
}
console.log(stu1);


// here data variable is a number
let stu2: student<number> = {
    name: "Prince",
    age: 20,
    data: 100
}
console.log(stu2);

//here we not provided age variable
let stu3: student<string> = {
    name: "Prince",
    data: "Generic"
}
console.log(stu3);