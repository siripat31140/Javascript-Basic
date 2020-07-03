//////////////////////////////////EP6////////////////////////////////////////
// Template Literals การต่อข้อความ

// แบบเดิม
 const name = 'pat'
 const last = 'Jankasueng'
 const city = 'bankok'
 const sum = "Name :" + name + "Last :" + last + "City :" + city
 const sum1 = "Name :" + name + "\
 \nLast :" + last + "\
 \nCity :" + city
 console.log(sum);
 console.log(sum1);
 // print out Name :patLast :JankasuengCity :bankok
  // print out Name :pat 
//Last :Jankasueng 
//City :bankok

// แบบใหม่
const allname1 =`Name = ${name} Last = ${last} City = ${city} `
const allname2 =`Name = ${name} 
Last = ${last} 
City = ${city} `
console.log(allname1);
console.log(allname2);
// proint out เหมือนแบบเดิม

//////////////////////////////////EP7////////////////////////////////////////
// Destructuring
//เเบบเก่า
var person = {
	name : 'sirpat jankeung',
	skill : "python machine learnling django SQL "
}

console.log(` Name : ${person.name} Skill : ${person.skill}`);

//////////////////////////////////EP8////////////////////////////////////////
// Computed Property Name

let user={
	name1: "pat",
	pinces :10
}
console.log(user.pinces*1000)


//////////////////////////////////EP9////////////////////////////////////////
// Shorthand Property & Method

let x = 'pat'
let y = 'siripat'

let user_name {
	 x , y
}

console.log(user_name);





