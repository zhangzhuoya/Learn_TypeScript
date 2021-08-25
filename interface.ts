interface Person {
    name:string;
    age?:number;// 可选属性
    readonly id:number// 只读属性
}

let zhang: Person = {
    id:111,
    name: 'zhang',
    age: 20
    // gender: 'male'
}
zhang.id = 444;

