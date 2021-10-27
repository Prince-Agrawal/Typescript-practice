"use strict";
// Practice
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_js_1 = require("./class.js");
console.log(new class_js_1.Student1(1, "Prince", 2));
// declare variables by constructor - works only when access modifies are used
var Student2 = /** @class */ (function () {
    //constructor for initializing values 
    function Student2(rollNo, name, age) {
        this.rollNo = rollNo;
        this.name = name;
        this.age = age;
    }
    // method to return detail 
    Student2.prototype.format = function () {
        return "Student Roll No is " + this.rollNo + " , name is " + this.name + " and age is " + this.age;
    };
    return Student2;
}());
// array and objects start
var mob; // Array
var obj; // object
var anyType;
var mixedArray1;
var mixedArray2;
// array and objects end
// functions concep start 
var arrowFunction = function () {
    return 'Hey, I am a arrow function';
};
// specify function type
var fun1;
fun1 = function () { };
// optional parameter concept
// (optional parameter by ?)
var fun2 = function (num1, num2, num3) {
    return num1 + num2;
};
fun2(1, 2);
//function declearation having return type string
var fun3;
fun3 = function () {
    return "string";
};
var myUser;
var p1 = {
    name: "Prince",
    age: 20,
    speak: function (text) {
        return text;
    },
    spend: function (num) {
        return num;
    }
};
// GENERICS
var addUID = function (obj) {
    var Uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { Uid: Uid });
};
var docOne = addUID({ name: "Prince", age: 20 });
console.log(docOne);
var myObj = {
    name: "Prince",
    age: 20,
    data: "Generic"
};
console.log(myObj);
//ENUM
var Index;
(function (Index) {
    Index[Index["BOOK0"] = 0] = "BOOK0";
    Index[Index["BOOK1"] = 1] = "BOOK1";
    Index[Index["BOOK2"] = 2] = "BOOK2";
    Index[Index["BOOK3"] = 3] = "BOOK3";
    Index[Index["BOOK4"] = 4] = "BOOK4";
})(Index || (Index = {}));
;
var EE1 = {
    name: "1",
    index: Index.BOOK1 // so here it is taking index of BOOK1
};
var EE2 = {
    name: "2",
    index: Index.BOOK2 // so here it is taking index of BOOK2
};
// tuples  
var student;
// student = [2 , "Prince" , false];
student = ["Prince", 2, false];
