const locations = {
  20: "place 1",
  30: "place 2",
  40: "place 3",
  50: "place 4",
};

let mainLOc = 15;

let locationsArry = Object.keys(locations);
console.log(locationsArry);
//['20', '30', '40', '50']  string
// اذا اردنا ان يعودو لنا رقم
let locationsArryNum = locationsArry.map((n) => +n);
console.log(locationsArryNum); //[20, 30, 40, 50] numbers

let check = locationsArryNum.every(function (e) {
  return e > this;
}, mainLOc);
console.log(check); //true
