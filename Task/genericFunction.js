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
// GENERICS
var addUID = function (obj) {
    var Uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { Uid: Uid });
};
var docOne = addUID({ name: "Prince", age: 20 });
console.log(docOne);
// return generics
var makeArr = function (x) {
    return [x];
};
var a1 = makeArr(3);
var s1 = makeArr("s");
// two values in as generic
var makeArr2 = function (x, y, z) {
    return [x, y, z];
};
var a2 = makeArr2(1, 2);
var m2 = makeArr2(1, "2");
var m3 = makeArr2(1, 1);
// extends example
// so here t is type of object which atleast contain first name and last name
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
var o1 = makeFullName({ firstName: "Prince", lastName: "Agrawal" });
console.log(o1);
var o2 = makeFullName({ firstName: "Prince", lastName: "Agrawal", age: 20 });
console.log(o2);
var myObj = {
    name: "Prince",
    age: 20,
    data: "Generic"
};
console.log(myObj);
