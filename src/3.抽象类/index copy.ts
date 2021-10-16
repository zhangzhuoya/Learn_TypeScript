abstract class Chess {
    x:number= 0
    y:number= 0
    abstract readonly name:string;
    abstract move(targetX:number,targetY:number):boolean
    protected isOutSide() {
        console.log('1.边界判断');
        return false
    }
    protected targetHasmengyou() {
        console.log('2.目标位置是否有己方棋子');
        return false
    }
    protected finishMove(targetX: number, targetY: number) {
        console.log('3.完成移动');
        return false
    }
}
class Hose extends Chess{
    move(targetX: number, targetY: number): boolean {
        // 1. 重复的调用
        // 2. 调用的顺序和方式，没有强约束
        console.log('1','边界判断');
        console.log('2','目标位置是否有己方棋子');
        console.log('3','棋子移动规则判断');
        
        this.x = targetX;
        this.y = targetY;
        console.log('马移动成功');
        return true
    }
    name: string = 'hose';
}  

class Pao extends Chess {
    move(targetX: number, targetY: number): boolean {
        console.log('1','边界判断');
        console.log('2','目标位置是否有己方棋子');
        console.log('3','棋子移动规则判断');
        this.x = targetX;
        this.y = targetY;
        console.log('炮移动成功');
        return true
    }
    readonly name:string
    constructor() {
        super();
        this.name = '炮'
    }

}
class Solider extends Chess {
    move(targetX: number, targetY: number): boolean {
        console.log('1','边界判断');
        console.log('2','目标位置是否有己方棋子');
        console.log('3','棋子移动规则判断');
        this.x = targetX;
        this.y = targetY;
        console.log('兵移动成功');
        return true
    }
    get name() {
        return '兵'
    }
}
const h = new Hose();
const p = new Pao();
// let c = new Chess()