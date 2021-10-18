import { IFireShow, Ishow, IWisdomShow } from "./interfaces";

export abstract class Animal {
    abstract type: string;
    constructor(public name: string,public age: number) {
    }
    sayHello() {
        console.log(`大家好，我是${this.type}， 我的名字时${this.name},我的年龄是${this.age}`);
    }
}
export class Dog extends Animal implements IWisdomShow{
    // sayHello(): void {
    //     throw new Error("Method not implemented.");
    // }
    type = '狗'
    constructor(public name: string,public age: number) {
        super(name,age)
        this.name = name;
        this.age = age
    }
    suanshu() {
        console.log(this.type+'可以算数');
    }
    jump() {
        console.log(this.type+'可以跳舞');
    }
}
export class Lion extends Animal implements IFireShow {
    type="狮子";
    simpleFire() {
        console.log(this.type+'可以跳一个火圈');
    }
    doubleFire() {
        console.log(this.type+'可以跳两个火圈');
    }
}
export class Tiger extends Animal {
    type="老虎";
    singleFire() {
        console.log(this.type+'可以跳一个火圈');
    }
    doubleFire() {
        console.log(this.type+'可以跳两个火圈');
    }
}
export class Monkey extends Animal implements Ishow {
    type = "猴子"
    dumuqiao() {
        console.log(this.name+'我可以走独沐清清');
        
    }
    zougangsi() {
        console.log(this.name+'我可以走钢丝');
    }
}
interface C extends Animal {

}
let a:C = {
    type: '动物1',
    age: 12,
    name: 'z1',
    sayHello() {

    }
}

class D implements C {
    type: string;
    sayHello(): void {
        throw new Error("Method not implemented.");
    }

}