abstract class Chesss {
    x:number= 0
    y:number= 0
    move(targetX:number,targetY:number):boolean{
        if (this.rule(targetX,targetY)) {
            this.x = targetX
            this.y = targetY
            console.log('移动成功');
            return true
        }else {
            return false
        }
    }
    protected abstract rule(targetX:number,targetY:number):boolean
    
}
class Hoses extends Chesss{
    protected rule(targetX: number, targetY: number): boolean {
        return true
    }
}  

class Paos extends Chesss {
    protected rule(targetX: number, targetY: number): boolean {
        return false
    }

}
class Soliders extends Chesss {
    protected rule(targetX: number, targetY: number): boolean {
        return false
    }
}
const hs = new Hoses();
const ps = new Paos();
// let c = new Chess()
hs.move(2,31)