let myString = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
console.log(myString.match(atozSmall));
// ["a", "b", "c", "d", "e", "f"];
// للبحث عن الاحرف الصغيرة
//=================================================
let NotatozSmall = /[^a-z]/g;
console.log(myString.match(NotatozSmall));
//['A', 'B', 'G', '1', '2', '3', '!', '2', '3', '4', '%', '^', '&', '*']
//=================================================
let AtoZCapital = /[A-Z]/g;
console.log(myString.match(AtoZCapital));
//['A', 'B', 'G']
//================================================
let aAndcAnde = /[ace]/g;
console.log(myString.match(aAndcAnde));
//['a', 'c', 'e']
// للبحث عن حروف محددة
let notaAndcAnde = /[^ace]/g;
//=============================================
let letters = /[a-z]/gi;
console.log(myString.match(letters));
//['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
let letters1 = /[a-zA-Z]/g;
console.log(myString.match(letters1));
//['A', 'a', 'B', 'b', 'c', 'd', 'e', 'f', 'G']
//=====================================================
let special = /[^a-zA-Z1-9]/g;
console.log(myString.match(special));
// ['!', '%', '^', '&', '*']
