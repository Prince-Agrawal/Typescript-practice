"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student1 = void 0;
var Student1 = /** @class */ (function () {
    //constructor for initializing values 
    function Student1(r, n, a) {
        this.rollNo = r;
        this.name = n;
        this.age = a;
    }
    // method to return detail 
    Student1.prototype.format = function () {
        return "Student Roll No is " + this.rollNo + " , name is " + this.name + " and age is " + this.age;
    };
    return Student1;
}());
exports.Student1 = Student1;
