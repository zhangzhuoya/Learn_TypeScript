// let strssss:string = 'www';
// console.log(strssss);
// let gender: '男'| '女';


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

