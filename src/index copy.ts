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
