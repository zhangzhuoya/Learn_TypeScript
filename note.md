> 是指附属于函数，类，接口，类型别名上的类型
有时书写某些函数的时候，会丢失一些信息（多个位置的类型应该保持一致或有关联的信息）
泛型相当于类型变量，在定义时，我无预先知道具体的类型，可以用该变量代替，只有在调用的时候才知道

很多时候，ts会智能的根据传递的参数推导出泛型的具体类型

如果无法完成推导，并且又没有传递具体的类型，默认为空对象。

泛型可以赋值默认值
```js
function take(arr:any [],n:number):any [] {
    if (n>=arr.length) {
        return arr
    }
    const newArr:any [] = []
        for (let i = 0; i < n; i++) {
            newArr.push(i)
        }
    return newArr
}
console.log(take([1,2,3,0,4,4,5,5,5,6,7,7],9));
```
# 在函数中使用
在函数写上<T>
```js
function take<T = number>(arr:T [],n:number):T [] {
    if (n>=arr.length) {
        return arr
    }
    const newArr:T [] = []
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i])
        }
    return newArr
}
// console.log(take<string>([1,2,3,0,4,4,5,5,5,6,7,7],9));//只有在调用的时候使用
console.log(take<number>([1,2,3,0,4,4,5,5,5,6,7,7],9));

```

## 在接口，类型别名，类中使用
直接在名称后写上```<泛型名称>```

```js
//  回调函数，判断数组中的某一项，是否满足条件
type callback<T> = (n:T, i:number)=> boolean;
function filter<T>(arr:T[],callback:callback<T>):T[] {
    const newArr: T[] = [];
    arr.forEach((item,i) => {
        if (callback(item,i)) {
            newArr.push(item)
        }
    });
    return newArr;
}
const arr = [1,22,3,6,44,32];
console.log(filter<number>(arr,n=>n%2!==0));

```