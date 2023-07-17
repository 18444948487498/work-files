/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
let Vardenis = "Beatrice"
let Pavardenis = "Sakalaite"
let dob = 2006
let year = new Date().getFullYear()

console.log(`As esu ${Vardenis} ${Pavardenis}. Man yra ${year - dob} metu `)


/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
 

let t = Math.round(Math.random() * 4)
let z = Math.round(Math.random() * 4)
console.log(`nums: ${t} ${z}`)

if (t == 0 || z == 0){
    console.log("")
}else if(t > z ) {
    console.log((t/z).toFixed(2))
}else{
    console.log((z/t).toFixed(2))
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
let sk1 = Math.round(Math.random() * 25)
let sk2 = Math.round(Math.random() * 25)
let sk3 = Math.round(Math.random() * 25)

console.log(`nums ${sk1} ${sk2} ${sk3}`)
let largest = Math.max(sk1,sk2,sk3)
let smallest =  Math.min(sk1,sk2,sk3)
let middle 

if (sk1 != largest && sk1 != smallest){
    middle = sk1
}else if (sk2 != largest && sk2 != smallest){
    middle = sk2
}
else if (sk3 != largest && sk3 != smallest){
    middle = sk3
}else {
    middle = "undetermined as 2 or more were equal."
}

console.log(`the middle number is ${middle}`)



/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
let kr1 = Math.round(Math.random() * 10)
let kr2 = Math.round(Math.random() * 10)
let kr3 = Math.round(Math.random() * 10)
console.log(`${kr1} ${kr2} ${kr3}`)
sum2 = [kr1,kr2,kr3]
if (kr1 + kr2 <= kr3 || kr1 + kr3 <= kr2 || kr2 + kr3 <= kr1){
   console.log(`you can create a triangle` )
   
}else{
    console.log("you cant create a triangle")
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
let kt1 = Math.round(Math.random() * 2)
let kt2 = Math.round(Math.random() * 2)
let kt3 = Math.round(Math.random() * 2)
let kt4 = Math.round(Math.random() * 2)
array= [kt1,kt2,kt3,kt4]

array = array.sort()


for (let i = 0; i < array.length; i++) { 
    const name = array[i];
    console.log(`${name}`);
}




console.log(`${array}`)






// // let zero = 0
// // let one = 0
// // let two = 0
// // boxes = zero,one,two

// for (let i = 0; i < myArr.length; i++) {
//     Arr[i] = Arr[i] + 1;
// }

// if(kt1 === 0){

// }


// let myArr = [kt1,kt2,kt3,kt4]
// let total = 0;
// if(kt1 === 0) {
    
// }

// console.log()
// console.log(`${total}`)


// console.log(`${kt1} ${kt2} ${kt3} ${kt4}`)
// let array = [kt1,kt2,kt3,kt4]


// if(array = 0){
//     sum3 += array
// }
// console.log(array)



// nums = 0
// if(let i = 0; i < nums.length; i++){
//     sum2 += nums[i]
// }
// console.log(sum)
// let array = [kt1,kt2,kt3,kt4]







/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
let k1 = Math.round(Math.random()* (10 - 10 + 1))
let k2 = Math.round(Math.random()* (10 - 10 + 1))
let k3 = Math.round(Math.random()* (10 - 10 + 1))

numbers8 = [k1,k2,k3]



/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
let candle = Math.round(Math.random()* (3000 - 5 + 1))

if(candle <= 1000){
    console.log(candle / 3 )
}
console.log(`${candle}`)

// console.log(`${candle}`)



/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
// let t1 = Math.round(Math.random()* 100)
// let t2 = Math.round(Math.random()* 100)
// let t3 = Math.round(Math.random()* 100)




/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
let t1 = Math.round(Math.random()* (9999 - 1000))
let t2 = Math.round(Math.random()* (9999 - 1000))
let t3 = Math.round(Math.random()* (9999 - 1000))
let t4 = Math.round(Math.random()* (9999 - 1000))
let t5 = Math.round(Math.random()* (9999 - 1000))
let t6 = Math.round(Math.random()* (9999 - 1000))
 
console.log(`t1,t2,t3,t4,t5,t6`)







console.log(`the middle number is ${middle}`)


