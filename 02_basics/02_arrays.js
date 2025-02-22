//Lec 15: Array part 2 in Javascript

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);        //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[0]);    //thor
// console.log(marvel_heros[1]);    //Ironman
// console.log(marvel_heros[2]);    //spiderman
// console.log(marvel_heros[3]);    //[ 'superman', 'flash', 'batman' ]




// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);           //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//spread operator -> we generally preffer this
/*
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
*/


/*
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);   //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
*/


console.log(Array.isArray("Hitesh")); //false , not an array
console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]   -> converted into array

//intresting case   
console.log(Array.from({name: "hitesh"})); //[] , we have  to give what we want to convet means we have to give key or value
    



let score1 = 100
let score2 = 200
let score3 = 300
//convert to array
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]

