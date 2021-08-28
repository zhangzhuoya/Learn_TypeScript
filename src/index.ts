/**
 * 将某个对象的name属性的每个单词的首字母大写，并且将该对象返回
 */
interface has {
    name: string
}
function nameToUpperCase<T extends has>(obj:T){
   obj.name= obj.name.split(" ").map(item=>{
        item[0].toUpperCase() +item.substr(1)
    }).join(" ")
    console.log(obj);
    



}
const o = {
    name:'zhang',
    age: 22
}
let newObj = nameToUpperCase(o)
// newObj()