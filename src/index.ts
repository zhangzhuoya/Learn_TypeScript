import { Animal,Tiger,Lion, Monkey } from "./animal";
import { IFireShow } from './interfaces'
let animals:Animal[] = [
    new Tiger("老虎一",12),
    new Monkey("猴子一",12),
    new Lion("狮子一", 12)
]
// 1. 所有的动物都能打招呼
// animals.forEach(a=>a.sayHello())

// 2. 所有会跳火圈表演的动物完成火圈表演  
// animals.forEach(item => {
//     if (item instanceof Lion) {//隐患：如果狮子里面的singleFire函数没有了，到处进行判断，代码改动量大，如果有一个
//         item.simpleFire()// 容易将类型和功能耦合在一起，有时候函数的时候，必须先判断一下类型。
//         item.doubleFire()
//     }else if(item instanceof Tiger) {
//         item.singleFire();
//         item.doubleFire();
//     }
// })
// 3. 改造// 这样做不可以，不参与运行
//  animals.forEach(item => {
//         if (item instanceof IFireShow) {
//             // item.simpleFire()
//             // item.doubleFire()
//         }else if(item instanceof Tiger) {
//             item.singleFire();
//             item.doubleFire();
//         }
// })

// animals.forEach(item=>{
//     if (((item as unknown as IFireShow).simpleFire)) {
//         // item.simpleFire();
        
//     }
// })

// 4. 类型保护函数
function hasFireShow(ani: object): ani is IFireShow {
    if ((ani as unknown as IFireShow).simpleFire&&(ani as unknown as IFireShow).doubleFire) {
        return true
    }else {
        return false
    }
}
animals.forEach(item=>{
        if (hasFireShow(item)) {
            item.simpleFire();
        }
})