//Parent class
abstract class Shape {
    // variable declearations
    private area: number;
    public perimeter: number;
    readonly shapeName: string; // only read not update

    //variable initialization by constructor
    constructor(area: number , peri: number , shapeName: string){
        this.area = area;
        this.perimeter = peri;
        this.shapeName  = shapeName;
    }

    // getter of area variable because area is a private variable 
    getAreaValue(){
        return this.area;
    }

    abstract displayArea(): void;

    abstract displayPerimeter(): void;
}

// child class 1
class Circle extends Shape{
    displayArea(){
        console.log(`Area of ${this.shapeName} is : ${this.getAreaValue()}`);
    }

    displayPerimeter(){
        console.log(`Perimeter of ${this.shapeName} is : ${this.perimeter}`);
    }
}

// child class 2
class Rectangle extends Shape{
    displayArea(){
        console.log(`Area of ${this.shapeName} is : ${this.getAreaValue()}`);
    }

    displayPerimeter(){
        console.log(`Perimeter of ${this.shapeName} is : ${this.perimeter}`);
    }
}

// instance of circle class
let circle1 = new Circle(100 , 50 , "Circle");
console.log("Circle Details are:");
circle1.displayArea();
circle1.displayPerimeter();


// instance of rectangle class
let rec1 = new Rectangle(50 , 25 , "Rectangle");
console.log("Rectangle Details are:");
rec1.displayArea();
rec1.displayPerimeter();

