// 约束泛型
/**
 * 将某个对象的name属性的每个单词的首字母大写，然后将该对象返回
 */
interface s {
    name: string
}
 function nameToUpperCases<T extends s>(o:T):T{
    o.name = o.name.split("").map(s=>s[0].toUpperCase()+s.substr(1)).join("")
    return o;

}

let os = {
    name: 'zhangsan',
    age: 21,
    sex: 'man'
}
console.log(nameToUpperCases(os))