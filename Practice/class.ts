export class Student1{
    public rollNo: number | string; // accessible from outside the class also
    readonly name: string; // we can not edit it
    private age: number; // accessible only inside the class

    //constructor for initializing values 
    constructor(r: number|string , n: string, a: number){
        this.rollNo = r;
        this.name = n;
        this.age = a;
    }

    // method to return detail 
    format() : string {
        return `Student Roll No is ${this.rollNo} , name is ${this.name} and age is ${this.age}`; 
    }

    
}