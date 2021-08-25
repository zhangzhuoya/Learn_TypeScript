## 安装
npm i -g typescrpt
运行
tsc index.ts

## 原始数据类型

## any类型
- 允许赋值为任意类型
```js
let notSure:any = 4;
notSure = 'maybe it is a string'
console.log(notSure);
```
## 数组
```js
let arrOfNumber: number[] = [1,3,4]
arrOfNumber.push()
```
- 类数组
- arguments
- 元组
```js
// 合并一种不同类型的数组
function test() {
}
test()

let user: [string,number] = ['zhangzhuo']
user = [2,3]

```
## Interface接口
- 对对象的形状进行描述
- 对类class进行抽象
- Duck Typing（鸭子类型）
```js

interface Person {
    name:string;
    age:number
}

let zhang: Person = {
    name: 'zhang',
    age: 20
}
```
```js
interface Person {
    name:string;
    age?:number;// 可选属性
    readonly id:number// 只读属性
}

let zhang: Person = {
    id:111,
    name: 'zhang',
    age: 20
    // gender: 'male'
}
zhang.id = 444;

```

## 函数
```js
function add(x:number, y:number,z?: number):number {
    return x+y
}
let res = add("dd",'dd')
```

```js
let add = function (x:number, y:number,z?: number):number {
    return x+y
}
let res = add(111,2);
let add2:(x:number,y:number,z?: number) => number = add

```
## 类（class）

## 如何在类型别名，接口，类中使用泛型

直接在名称后写上 ```<泛型名称>```

## ts配置文件
tsc --init

## 使用第三方库简化流程
ts-node: 将ts代码在内存中完成编译，同时完成运行
- 监控代码变化

nodemon: 检测文件变化，cnpm i -g nodemon

nodemon --exec ts-node src/index.ts

## 默认情况下tss会做出下面几种假设，
1. 假设当前为浏览器环境，
2. 如果代码中没有使用模块化语句（import，export）

## 扩展类型-枚举
> 扩展类型： 类型别名。枚举，接口，类

枚举通常用来约束某个变量的取值范围。
字面量和联合类型配合使用，也会达到这个目的
- 在类型约束位置，会产生重复代码。可以使用类型别名解决。
- 逻辑名称和真实的值产生了混淆，会导致当修改真实的值的时候，产生大量的修改。
- 
定义一个枚举
```js
enum 枚举名{
    枚举字段1 = 值1,
    枚举字段2 = 值2
}
```
```js
// 定义一个枚举
enum Gender {
    male = '男',
    female= '女'
}
let gender: Gender;
gender = Gender.male
console.log(gender);
function print() {
    let keys = Object.keys(Gender)
    console.log(keys);
}
print()
```
枚举会重现在编译结果中，表现为对象。

枚举的规则
- 枚举的字段只可以使用数字和字符串
- 数字枚举的值会自动自增，第一个不赋值，第一个是0
- 数字枚举约束的变量，可以直接赋值为数字，可能会导致一些问题。不建议使用，因为又在使用真实的值
- 数字枚举的编译结果
  ```js
  {
  level1:0,
  level2:1,
  level3:2,
  0: 'level1',
  1: 'level2'

  }

  ```

最佳实践，尽量不要在一个枚举中，既出现了数字字段，又出现字符串字段
尽量使用枚举字段的值，不使用真实的值。
## 接口和类型兼容性
## 扩展类型-接口
> 扩展类型：类型别名，接口，类

TypeScript的接口：用来约束类，对象，函数的契约（标准）。

锲约的形式： 
- 文档形式
  ###### fffff