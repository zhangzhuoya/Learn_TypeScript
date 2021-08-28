export class ArrayHelper {
    take<T>(arr:T[],n:number):T[]{
        if (n>=arr.length) {
            return arr
            
        }
        let newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i])
            
        }

    }
    shuffle() {
        

    }
}