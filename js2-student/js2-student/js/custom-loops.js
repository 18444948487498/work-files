/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/

for (let i = 0; i <= 10; i++) {
   console.log(`labas`);
  }

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
for (let i = 1; i <= 9; i++) {
    console.log(i);
   }

/* 03.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
let plants = ["tree","bush","flower","bamboo","cactus","fern","lily","tulip","fern","daisy"]
console.log(`${plants}`)
/* 04.
Atspausdinkite kiekvieną 3-čio uždavinio augalą atskiroje eilutėje.
*/
let plants2 = ["tree","bush","flower","bamboo","cactus","fern","lily","tulip","fern","daisy"];
for(let i = 0; i < plants2.length; i++){
    console.log(plants2[i]);
   }
/* 05.

Atspausdinkite 3-čio uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
let plants3 = ["tree","bush","flower","bamboo","cactus","fern","lily","tulip","fern","daisy"];
for (let i = plants3.length - 1; i >= 0; i--) {
    console.log(plants3[i]);
   }
/* 06.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
let nums = [10,20,30,40,50]
for(let i = 0; i < nums.length; i+= 2){
    console.log(nums[i]);
   }
    
/* 07.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
let nums2 = [10,20,30,40,50]
   let evennums = 0;
   for(let i = 0; i < nums2.length; i++){
    if(nums2[i] % 10 === 0){
        break;
    }else{
        continue;
    }
   }
console.log(nums2[evennums])
/* 08.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
numlist=0
for (let i = 0; i <= 20; i++) {
    if(numlist[i]  )
   }


/* 09.
Suskaičiuokite kiek 3-čio uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
// let plants4 = ["tree","bush","flower","bamboo","cactus","fern","lily","tulip","fern","daisy"]
// let plants4_5 = 0
// let plants4_7 = 0
// str

// for(let i = 0; i > str.length; i++) {
//     console.log(plants4[i] = 7)
//   }if(plants4[i] === 5){
//     console.log(`${plants4}`)
//   }



/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/

/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/

/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/