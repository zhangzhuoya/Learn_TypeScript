export class Tank {
    private name:string = '坦克';
    gongji() {
        console.log('发起攻击',this.name);
    }
}
export class PlayerTank extends Tank {
    private name:string = '玩家坦克';
    x:number = 20
    playerGongji() {
        // console.log(this.name,'this指向');
        
        super.gongji()// 通过super调用的函数，是调用父类的
    }
    gongji() {
        this.gongji()// 调用的是自己的
        console.log('');
        
    }
    
}
export class EnemyTank extends Tank {
    name:string = '敌方坦克'
    y:number = 80
}
let p = new PlayerTank();
// console.log(p.name);
// p.playerGongji()
// p.gongji()
// console.log(p.x); // 不能使用，因为约束了类型为父类的，父类中不存在x，所以不能使用

if (p instanceof PlayerTank) {
    console.log(p.name,'dddd');
}
// p.name

// if (p instanceof Tank) {
//     console.log(p.name,'dddd');
// }

 