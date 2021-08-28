# 类

不能动态增加属性
```js
class User {
    constructor(name: string,age:number) {
        this.name = name;
        this.age = age

    }
}

```
```js
class User {
    name: string
    age: number
    constructor(name:string,age:number) {
        this.name = name;
        this.age = age
    }
}
const u = new User('aa',3);
```

严格检查属性是否有初始值
```js
"strictPropertyInitialization": true

```
初始化的两种方式
1. 构造函数中
2. 属性默认值
```js
class User {
    name: string
    age: number
    gender: '男' | '女'
    constructor(name:string,age:number,gender: '男' | '女'='女') {
        this.name = name;
        this.age = age
        this.gender = gender
    }
}
const u = new User('aa',3);

class User {
    name: string
    age: number
    gender: '男' | '女' = '男'
    constructor(name:string,age:number,gender: '男' | '女'='女') {
        this.name = name;
        this.age = age
        this.gender = gender
    }
}
const u = new User('aa',3);
```
属性可以修饰为可选的
```js
class User {
    name: string
    age: number
    gender: '男' | '女'
    // pid: string| undefined//可以有值可以没有值
    pid?: string//表示字符串可选，可不选 
    constructor(name:string,age:number,gender: '男' | '女'='女') {
        this.name = name;
        this.age = age
        this.gender = gender
    }
}
const u = new User('aa',3);

```
只读属性
```js
只读属性
class User {
    readonly id: number// 不能改变的值，只读属性，不能更改
    name: string
    age: number
    gender: '男' | '女'
    // pid: string| undefined//可以有值可以没有值
    pid?: string//表示字符串可选，可不选 
    constructor(name:string,age:number,gender: '男' | '女'='女') {
        this.name = name;
        this.age = age
        this.gender = gender
        this.id = Math.random()
    }
}
const u = new User('aa',3);

```
不让外部访问 js中使用symbol，ts中使用访问修饰符，
访问修饰符可以控制类中的某个成员的访问权限，
- public : 默认访问修饰符，公开的权限，所有的代码都可以访问
- private: 私有的，只有类中可以访问，内部自己调用
- protected: 暂时不说了
```js
class User {
    readonly id: number// 不能改变的值，只读属性，不能更改
    name: string
    age: number
    gender: '男' | '女'
    // pid: string| undefined//可以有值可以没有值
    pid?: string//表示字符串可选，可不选 
    private publishNumber: number = 3// 每天一共可以发布多少文章
    private curNumber: number = 0// 当前可以发布文章的数量
    constructor(name:string,age:number,gender: '男' | '女'='女') {
        this.name = name;
        this.age = age
        this.gender = gender
        this.id = Math.random()
    }
}
const u = new User('aa',3);
u.publishNumber = 9;
u.curNumber = -1;
```
简写: 如果某个属性，通过构造函数的参数传递，并且不做任何的处理赋值给改属性。可以进行简写 必须是public
```js
class User {
    readonly id: number// 不能改变的值，只读属性，不能更改
    // pid: string| undefined//可以有值可以没有值
    pid?: string//表示字符串可选，可不选 
    private publishNumber: number = 3// 每天一共可以发布多少文章
    private curNumber: number = 0// 当前可以发布文章的数量
    constructor(public name:string, public age:number, public gender: '男' | '女'='女') {
        this.id = Math.random()
    }
    publish(title:string){
        if (this.curNumber<this.publishNumber) {
            console.log('发布一篇文章'+title);
            this.curNumber++
        } else {
            console.log('发布文章达到上线');
            
        }
    }
}
const u = new User('aa',3);

```
- 使用属性列表

## 访问器
> 控制属性的读取和赋值，赋值这个属性的时候经过一段函数，读取的时候经过一段函数

```js
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
```