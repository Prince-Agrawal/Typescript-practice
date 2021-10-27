var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Parent class
var Shape = /** @class */ (function () {
    //variable initialization by constructor
    function Shape(area, peri, shapeName) {
        this.area = area;
        this.perimeter = peri;
        this.shapeName = shapeName;
    }
    // getter of area variable because area is a private variable 
    Shape.prototype.getAreaValue = function () {
        return this.area;
    };
    return Shape;
}());
// child class 1
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.displayArea = function () {
        console.log("Area of " + this.shapeName + " is : " + this.getAreaValue());
    };
    Circle.prototype.displayPerimeter = function () {
        console.log("Perimeter of " + this.shapeName + " is : " + this.perimeter);
    };
    return Circle;
}(Shape));
// child class 2
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.displayArea = function () {
        console.log("Area of " + this.shapeName + " is : " + this.getAreaValue());
    };
    Rectangle.prototype.displayPerimeter = function () {
        console.log("Perimeter of " + this.shapeName + " is : " + this.perimeter);
    };
    return Rectangle;
}(Shape));
// instance of circle class
var circle1 = new Circle(100, 50, "Circle");
console.log("Circle Details are:");
circle1.displayArea();
circle1.displayPerimeter();
// instance of rectangle class
var rec1 = new Rectangle(50, 25, "Rectangle");
console.log("Rectangle Details are:");
rec1.displayArea();
rec1.displayPerimeter();
