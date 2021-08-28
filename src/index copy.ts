// class User {
//     readonly id: number// 不能改变的值，只读属性，不能更改
//     // pid: string| undefined//可以有值可以没有值
//     pid?: string//表示字符串可选，可不选 
//     private publishNumber: number = 3// 每天一共可以发布多少文章
//     private curNumber: number = 0// 当前可以发布文章的数量
//     constructor(public name:string, public age:number, public gender: '男' | '女'='女') {
//         this.id = Math.random()
//     }
//     publish(title:string){
//         if (this.curNumber<this.publishNumber) {
//             console.log('发布一篇文章'+title);
//             this.curNumber++
//         } else {
//             console.log('发布文章达到上线');
            
//         }
//     }
// }
// const u = new User('aa',3);
// // u.publishNumber = 9;
// // u.curNumber = -1;
// u.publish('文章1')
// u.publish('文章2')
// u.publish('文章3')
// u.publish('文章4')
// u.publish('文章5')
// u.publish('文章6')

