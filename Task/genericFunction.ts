// GENERICS
let addUID = <T extends object>(obj: T) => {
    let Uid = Math.floor(Math.random()*100);

    return {...obj , Uid};
}
let docOne = addUID({name: "Prince" , age: 20});
console.log(docOne);

// return generics
let makeArr = <T>(x : T) : T[]=>{
    return [x];
}
let a1 = makeArr(3);
let s1 = makeArr("s");


// two values in as generic
let makeArr2 = <T1 , T2 = number>(x: T1 , y: T2 , z?: number)=>{
    return [x , y , z];
}
let a2 = makeArr2(1 ,2);
let m2 = makeArr2<number, string>(1 , "2");
let m3 = makeArr2<number>(1 , 1);


// extends example
// so here t is type of object which atleast contain first name and last name
let makeFullName = <T extends {firstName: String , lastName: string}>(obj: T)=>{
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}
let o1 = makeFullName({firstName: "Prince" , lastName: "Agrawal"});
console.log(o1);
let o2 = makeFullName({firstName: "Prince" , lastName: "Agrawal" , age: 20});
console.log(o2);


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