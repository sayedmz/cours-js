//datatype : [ARRAY]

let names = ['ahmad' , 'mouhamamd' , 'ali' , 'omar'];

console.log(names); // (4) ['ahmad', 'mouhamamd', 'ali', 'omar']

console.log(names[0]); //ahmad
console.log(names[1]); //mouhamamd
console.log(names[2]); //ali

console.log(names.length); //4

let objects = [1,2,3,[4,5,6,[7,8,9]]]
console.log(objects[3]); //(3)  [4, 5, 6, Array(3)]

console.log(objects[3][2]);//6
console.log(objects[3][0]);//4

console.log(objects[3][3][1]);//8
console.log(objects[3][3][2]);//9

//لتغيرر ما بداخل
let names1 = ['ahamd', 'ali' , 'mazen'];

//اتغير قيمة احمد 
names1[0] = 'mo zak';
console.log(names1); //(3) ['mo zak', 'ali', 'mazen']

names1[1] = 'ah zak';
names1[2] = 'kh zak';
console.log(names1); //(3) ['mo zak', 'ah zak', 'kh zak']

       //add in array
let names2 = ['ahamd', 'ali' , 'mazen'];
 //add in last  push
 names2.push('abed zak' , 'taha');
 console.log(names2); //(5) ['ahamd', 'ali', 'mazen', 'abed zak', 'taha']

 //add in first  unshift
 names2.unshift('hala', 'ghina');
 console.log(names2);
//(7) ['hala', 'ghina', 'ahamd', 'ali', 'mazen', 'abed zak', 'taha']

       //delet in array
// delete in first  shift
let names5 = ['ahamd', 'ali' , 'mazen'];
names5.shift();

console.log(names5); //(2) ['ali', 'mazen']
//ولكن تحتفظ بالقيمة لديها

//delet in last  pop
let names6 = ['ahamd', 'ali' , 'mazen'];
names6.pop()
console.log(names6);//(2) ['ahamd', 'ali']

       // splice and slice in  array

//splice(start,count-number,'add','add') 
let names7 = ['ahamd', 'ali' , 'mazen' , 'gamal']; 
names7.splice(0, 1);
console.log(names7);//['ali', 'mazen', 'gamal']

let names8 = ['ahamd', 'ali' , 'mazen' , 'gamal']; 
names8.splice(1, 3);
console.log(names8); // ['ahamd']

let names9 = ['ahamd', 'ali' , 'mazen' , 'gamal']; 
names9.splice(2,2, 'abed' , 'zak')
console.log(names9); //['ahamd', 'ali', 'abed', 'zak']

let names10 = ['ahamd', 'ali' , 'mazen' , 'gamal']; 
names10.splice(2,0,'hala');
console.log(names10); //['ahamd', 'ali', 'hala', 'mazen', 'gamal']

//slice(start,end)  array لا تأثر في 
let names11 = ['ahamd', 'ali' , 'mazen' , 'gamal'];
console.log(names11.slice(0,3)); //['ahamd', 'ali', 'mazen']
console.log(names11.slice(0,2)); //['ahamd', 'ali']
//array لا تأثر في 
console.log(names11); //['ahamd', 'ali', 'mazen', 'gamal']

console.log(names11.slice(-3,-1)); //['ali', 'mazen']


         //search in array 
//indexof(value start)
let names12 = ['ahamd', 'ali' , 'mazen' , 'gamal','ali','ahamd'];
console.log(names12.indexOf('ahamd')); //0
console.log(names12.indexOf('ali')); //1
console.log(names12.indexOf('ahamd', 2)); //5
console.log(names12.indexOf('khaled', 1)); //-1
console.log(names12.indexOf('ali', 2)); //4
//lastIndexOf(value start)
console.log(names12.lastIndexOf('ali')); //4
console.log(names12.lastIndexOf('ahamd')); //5

console.log(names12.lastIndexOf('ali',3)); //1
console.log(names12.lastIndexOf('ahamd',3)); //0

//includes(value start)
console.log(names12.includes('ali')); //true
console.log(names12.includes('khaled')); //false
console.log(names12.includes('mazen',3)); //false

           //sort and reverce array
let names13 = ['ahamd', 'ali' , 'mazen' , 'gamal'];

//reverce
console.log(names13.reverse()); //['gamal', 'mazen', 'ali', 'ahamd']

//sort ترتيب حسب الاحرف
console.log(names13.sort()); //['ahamd', 'ali', 'gamal', 'mazen']
   let arr = [7,4,9,2,5,1];
   console.log(arr.sort());  //[1, 2, 4, 5, 7, 9]
   

          //contact and join array
let names14 = ['ahamd', 'ali' , 'mazen' , 'gamal',];       
let names15 = [' hala', 'wael' , 'abed'];  

// names14 = names14 + names15
// console.log(names14);// ahamd,ali,mazen,gamal hala,wael,abed

console.log(names14.concat(names15));
// ['ahamd', 'ali', 'mazen', 'gamal', ' hala', 'wael', 'abed']

console.log(names14.concat(names15 ,"mona"));
//['ahamd', 'ali', 'mazen', 'gamal', ' hala', 'wael', 'abed', 'mona']

console.log(names14.concat(names15 ,"mona" , [1,2]));
//['ahamd', 'ali', 'mazen', 'gamal', ' hala', 'wael', 'abed', 'mona', 1, 2]



              //join بدون القوس
let names16 = [' hala', 'wael' , 'abed'];  

//console.log(names16.join()); //hala,wael,abed

console.log(names16.join('-')); // hala-wael-abed

console.log(names16.join('  ')); // hala  wael  abed

console.log(names16.join(' & ')); // hala & wael & abed
