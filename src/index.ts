// 多泛型
// 将两个数组进行混合 [1,2,3,45] ['a','b','c','f','c']

function mixinArray<T,K>(arr1: T[],arr2:K[]):(T|K)[] {
    if (arr1.length!==arr2.length) {
        throw new Error('两个数组的长度不等')
    }
    let result:(T|K)[]= [];
        result.push(arr1[0])
        result.push(arr2[1])
        return result;

}
console.log(mixinArray([1,3],["f","k"]))
