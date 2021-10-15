// 数组帮助类接口
export class ArrayHelper<T> {
    constructor(private arr:T[]){}
    
    take(arr:T[],n:number):T[] {
        if (n>=arr.length) {
            return arr
        } 
        const newArr:T[]=[]
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i])
            
        }
        return newArr
    }
}