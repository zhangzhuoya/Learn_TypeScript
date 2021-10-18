// const obj = {
//     [prop:string]:string|number
//     name: "asdf",
//     age: 12,
//     "my-obj": 'haha'
// }
// const methodName = "sayHello"
// for (const prop in obj) {
//     console.log(prop,obj[prop]);
// }
// class User1 {
//     [prop:string]:string|number|{():void}
//     constructor(name:string,age:number) {
//     }
//     [methodName]() {
//         console.log('methodName');
//     }
// }
// let z1 = new User1('zz',12)
// z1[methodName]();
// console.log(z1["ss"]);
// console.log(obj["name"]);
// console.log(obj.aa);


// const arr = [1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr["0"]);

// class MyArray {
//     [index:number]:string
//     0="1"
//     1="2"
//     2="3"
// }
// let s = new MyArray();
// console.log(s["0"]);

const arr:number = [];
arr[0] = 1;
arr["0"] = 3;
console.log(arr[0]);
