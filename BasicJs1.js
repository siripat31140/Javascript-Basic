/////////////////////////////////////EP1/////////////////////////////////////////
//global ,local - box scope
// var let
//constant

let price = 20
let fruit = 'มะม่วง'

if(price === 20){
    let fruit = 'hungry'
    console.log(fruit);
};
console.log(fruit);

const person = { firstname : 'Sirpat', lastname : 'Jankhang'}
person.firstname = 'ไม่บอก' //change value first
console.log(person);

/////////////////////////////////////EP2/////////////////////////////////////////
// Arrow Function
// function normal basic ๆๆ
function pat(a,b){
    return a+b ;
};
let result = pat(5,9)
console.log(result);
// if Arrow Function
// กรณีรับมา 1paramter
const siri=(a,b)=> a+b
let result2 = siri(7,9)
console.log(result2);
// กรณีรับมากว่า 1paramter
const student=name=>({
    name:name,age:10
})
let namestudent = student('pat')
console.log(namestudent); 
/////////////////////////////////////EP3/////////////////////////////////////////
//Default Parameter
const addUser=(name,last,city='ขอนเเก่น')=>{
    return name +' '+ last + " city :" + city
}
let addname =addUser('pat','jan','buriraim')
let addname1 =addUser('pat','jan')
console.log(addname);
console.log(addname1);
// city จะมีกำหนด value default ถ้าเราไม่ใส่functionก็จะใส่ค่า defaultเเทน
/////////////////////////////////////EP4/////////////////////////////////////////
//Rest Operator เหมือนการส่ง array เช้ามาช่วยในการทำงาน

const addlove=(name,last,...city)=>{
    return name +' '+ last + " city:" + city
}
let addname5 =addlove('pat','jan','buriraim','thailand')
console.log(addname5);
// print out : pat jan city:buriraim,thailand

// return ค่าออกมาเป็น array
const addmessage=(first , ... message)=>{
    return message.map(m=>first+message)
}
console.log(addmessage('hello','pat','put'));
//print out : ["hellopat,put", "hellopat,put"]

//Number
const addnumber=(... number)=>{
    return number.reduce((first,cerrent)=>{
        return first + cerrent
    })
}
console.log(addnumber(1,2,3,4,5));
//print out : 15
/////////////////////////////////////EP5/////////////////////////////////////////
//Spread Operator เป็นการการจายค่าไปใส่ array

// Array
let fruits = ['as','ad','af']
let newfruit =[...fruits,'za','xs','vf']
console.log(newfruit);