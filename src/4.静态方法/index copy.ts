class User {
    static users:User[] = [];
    constructor(public loginId:string,public loginName:string,public sex:string,public age:number) {
        User.users.push(this);
        console.log(User.users);
        
        // this.loginId = loginId
        // this.loginName = loginName
    }
    static login(loginId:string,loginName:string):User|undefined{
      return User.users.find(item=>item.loginId===loginId && item.loginName===loginName)
    }
    sayHello() {
        console.log(`大家好，我叫${this.loginName},今年${this.age}岁了`);
        
    }
}
// 登录
let u1 = new User("xxxx","dddd",'男',12)
// const s = new User("xx","y");
// // User.login()
// const u1 = new User('u1','123','王富贵',11)
if (User.login("xxxx","dddd")) {
    console.log('登录成功');
    u1.sayHello()
    
}