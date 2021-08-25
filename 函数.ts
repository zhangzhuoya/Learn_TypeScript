let add = function (x:number, y:number,z?: number):number {
    return x+y
}
let res = add(111,2);
let add2:(x:number,y:number,z?: number) => number = add
