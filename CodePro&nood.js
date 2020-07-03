const Person1 = {
    name: "pat",
    age: 16,
    Thai: true
}
const Person2 = {
    name: "siripat",
    age: 18,
    Thai: false
}
const Person3 = {
    name: "put",
    age: 30,
    Thai: false
}
// computed property Persons
console.log({ Person1, Person2, Person3 })
// console tables ...
console.log([Person1, Person2, Person3])


// console time
console.time('looper')
let i = 0;
while (i < 100000) { i++ }
console.timeEnd("looper")

// distruckturing
const turtle = {
    name: 'Bob 🐢',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

'Bad Code 💩'

//function feed(animal) {
//    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
//}


'Good Code ✅'

function feed({ name, meal, diet }) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

// OR

//function feed(animal) {
//    const { name, meal, diet } = animal;
//    return `Feed ${name} ${meal} kilos of ${diet}`;
//}



console.log(feed(turtle))


///template-literals
const horse = {
    name: 'Topher 🐴',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

'Good String Code ✅'
const { name, size, skills } = horse;
bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`
console.log(bio);

// Objects

const pikachu = { name: 'Pikachu 🐹'  };
const stats = { hp: 40, attack: 60, defense: 45 }

'Bad Object Code 💩'

//pikachu['hp'] = stats.hp
//pikachu['attack'] = stats.attack
//pikachu['defense'] = stats.defense
//
//// OR
//
//const lvl0 = Object.assign(pikachu, stats)
//const lvl1 = Object.assign(pikachu, { hp: 45 })

'Good Object Code ✅'
// sum object
const lvl0 = { ...pikachu, ...stats }
const lvl1 = { ...pikachu, hp: 45 }

// Arrays

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

'Bad Array Code 💩'

//pokemon.push('Bulbasaur')
//pokemon.push('Metapod')
//pokemon.push('Weedle')
//console.log(pokemon)

'Good Array Code ✅'

// Push 
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']
// Shift

pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle', ]
console.log(pokemon)



//loop
const orders = [500, 30, 99, 15, 223];
'Good Loop Code ✅'

// Reduce
const total = orders.reduce((x, y) => x + y)
console.log(total)

// Map
const withTax = orders.map(v => v * 1.1)
console.log(withTax)

// Filter
const highValue = orders.filter(v => v > 100);
console.log(highValue)



