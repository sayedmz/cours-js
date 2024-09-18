// spread with string
console.log("osama"); //osama
console.log(..."osama"); //o s a m a
console.log([..."osama"]); //['o', 's', 'a', 'm', 'a']

//concatenate
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr1All = [...arr1, ...arr2];
console.log(arr1All); // [1, 2, 3, 4, 5, 6]

//copy
let copyAyyr = [...arr1];
console.log(copyAyyr); //[1, 2, 3]

//push  inside array
let allFreinds = ["ahamd", "mouhamad", "sayed"];
let thisYearFre = ["abed", "ali"];
allFreinds.push(...thisYearFre);
console.log(allFreinds);
//['ahamd', 'mouhamad', 'sayed', 'abed', 'ali']
//=======================================
//use with math object
let nums = [100, 212, -22, 500, 23, -98];
console.log(Math.max(nums)); //NaN
console.log(Math.max(...nums)); //500
//=========================
//spread with object
let objone = {
  a: 1,
  b: 2,
};
let objtwo = {
  c: 3,
  d: 4,
};
console.log({ ...objone, ...objtwo, e: 5 });
//{a: 1, b: 2, c: 3, d: 4, e: 5}
