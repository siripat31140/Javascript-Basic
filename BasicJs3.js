//////////////////////////////////EP9////////////////////////////////////////
// Shorthand Property & Method
//let name = "siripat"
//let last = "jankhuang"
//let age = 20

//let user = {
//    name :name ,
//    last : last
//}
// หรือ
//let user = {
//    name , last
//}
//console.log(user);

//แบบใหม่
//function user1(name,last,age){
//    return {
//        name:name,
//        last:last,
//        age:age
//    }
//}
//// หรือ
//function user1(name,last,age){
//    return {
//        name,
//        last,
//        age
//    }
//}
//console.log(user1('pat','asda',10))
//
//////////////////////////////////EP10////////////////////////////////////////
//Class JavaScript ES6
// ต้องผ่าการเขียวเชิ้งวัตถุมาก่อน
//แบบเดิม
//var user2={
//    name,
//    last,
//    SayHi:function (){
//        return "Hello"+this.name
//    }
//}
//console.log(user2.SayHi());

//function User(name,age){
//    this.name = name ,
//    this.age = age
//}
//User.prototype.SayHi = function () {
//    console.log("hello =" + this.name + "Age = " +this.age);    
//}
//var user1 = new User('siripa',20)
//user1.SayHi()

//แบบใหม่
//class User{
//    constructor(name,age){
//        this.name = name,
//        this.age = age
//    }
//    SayHi(){
//        let result = ` Heloo ${this.name} Age ${this.age}`
//        console.log(result);
//    }
//}
//let user1 = new User('siripat',40)
//user1.SayHi()

///////////////////////////////////ep11/////////////////////////////////////////
//Inheritance (การสืบทอดคุณสมบัติ)
class Admin{
    constructor(){
        console.log("call constructor");
    }
    ispermission(){
        console.log("read write see");
    }
    
}

class User extends Admin{
    constructor(name,age){
        super() //ไปเรียกใช้งาน class เเม่
        this.name = name,
        this.age = age
    }
    SayHi(){
        let result = ` Heloo ${this.name} Age ${this.age}`
        console.log(result);
    }
}
let user1 = new User('siripat',40)
user1.SayHi()
user1.ispermission()