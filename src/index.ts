class User {
    readonly id: number// 不能改变的值，只读属性，不能更改
    // pid: string| undefined//可以有值可以没有值
    pid?: string//表示字符串可选，可不选 
    private publishNumber: number = 3// 每天一共可以发布多少文章
    private _curNumber: number = 0// 当前可以发布文章的数量
    constructor(public name:string, private _age:number, public gender: '男' | '女'='女') {
        this.id = Math.random()
    }
    publish(title:string){
        if (this._curNumber<this.publishNumber) {
            console.log('发布一篇文章'+title);
            this._curNumber++
        } else {
            console.log('发布文章达到上线');
        }
    }
    set age(value:number) {
        if (value < 0) {
            this._age =  0
        }else if(value>200){
            this._age = 200
        }else {
            this._age = value;
        }
        
    }
    get age() {
        return Math.floor(this._age);
    }


}
const u = new User('aa',3);
// u.publishNumber = 9;
// u.curNumber = -1;
u.publish('文章1')
u.publish('文章2')
u.publish('文章3')
u.publish('文章4')
u.publish('文章5')
u.publish('文章6')
// // u.age = 1.2
// u.setAge(123);
// u.setAge(-100)
// u.setAge(1.9)

// console.log(u.getAge());

// 年龄属性不能为小数，有些属性读取书写需要进行控制，在java中 private _age,表示私有成员

//  在c#中

u.age = -1;
console.log(u.age);

