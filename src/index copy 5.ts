// 回调函数，判断数组中的某一项是否满足条件,在类型别名中使用泛型
type callbacks<T> = (n: T,i:number)=>boolean
function filter<T>(arr: T[],callback:callbacks<T>):T[] {
    const newArr: T[] = [];
    arr.forEach((n,i)=>{
        if (callback(n,i)) {
            newArr.push(n);
        }
    })
    return newArr
}

const arrs = [3,4,5,2,100];
console.log(filter<number>(arrs,n=>n%2!==0));
