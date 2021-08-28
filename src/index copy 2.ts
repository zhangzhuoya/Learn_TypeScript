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
