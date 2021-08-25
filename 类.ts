class Animal {
    // name:string;
    private name: string;// 私有不可以访问
    protected age: number;// 只有自己和儿女可以使用
    readonly a: boolean;// 只读
    static cate: string[] = ["d","ddd"]//静态属性Animal.cate
    constructor(name:string) {
        this.name = name;
    }
    run() {
        return `${this.name} is running`
    }
}
const snake = new Animal('ligdy')
// console.log(snake.run());

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    bark() {
        return `${this.name} is wangwangwang`
    }
}
const ag = new Dog('xioagou')
// console.log(ag.run());



 interface Person {
     readonly id: number
 }