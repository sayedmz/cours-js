let users = ['ahamd','mouhamad', 'hala' ,1,2,3,4,5, 'abed' , 'gamal', 'oday', 'omar' ]

for(let i = 0 ; i < users.length ; i++)

{
    if(typeof users[i] == 'number')//لو وجدت نوع رقم 

    {
        continue; // قم باستبعاده
    }

    console.log(users[i])
} //ahmad mouhamad hala abed gamal oday omar
//-------------------------------
console.log('')

let users1 = ['ahamd','mouhamad', 'hala' , 'abed' , 'gamal', 'oday', 'omar' ]

for(let j = 0 ; j < users1.length ; j++)

{
    if(users1[j] == 'gamal')    //   لو وجدت    

    {
        continue; // قم باستبعاده
    }

    console.log(users1[j])
}//ahmad mouhamad hala abed  oday omar

//-------------------------------

console.log('')

let users11 = ['ahamd','mouhamad', 'hala' , 'abed' , 'gamal', 'ali', 'omar' ]

for(let j = 0 ; j < users1.length ; j++)

{
    if(users11[j] != 'ali')    //  كل شيئ تجده غير علي   

    {
        continue; // قم باستبعاده
    }

    console.log(users11[j])
}//ali

//-------------------------------
console.log('')
console.log('  ')

let users4 = ['ahamd','mouhamad', 'hala' , 'abed' , 'gamal', 'ali', 'omar' ]

for(let n=0 ; n < users4.length ; n++)

{ 
if(users4[n] =='gamal')  //لو وجدت  جمال  
{
    break // توقف 
} // سيتوقف قبل طباعة جمال 
console.log(users4[n])
}
//ahamd mouhamad hala abed




//-------------------------------
console.log('')
console.log('  ')

let users41 = ['ahamd','mouhamad', 'hala' , 'abed' , 'gamal', 'ali', 'omar' ]

for(let n=0 ; n < users41.length ; n++)

{ 
    console.log(users41[n])// سيتوقف بعد طباعة جمال 
if(users4[n] =='gamal')  //لو وجدت  جمال  
{
    break // توقف 
} 

} //ahamd mouhamad hala abed gamal

//-------------------------------------
let arr=[11,20,35,47,75,96,90];

for(let i=0;i<arr.length;i++){
    console.log("i is:"+i);
    console.log("The value of array at index "+i+" is :"+arr[i]);
    arr[i]=1//1,1,1,1,1,1,1
}
console.log(arr.toString())

//----------------------------------------------
//طريقة جديدة
const colors = ['red','blue','yellow']

for(let i of colors){
    console.log(i)
}//red  blue   yellow
//------------------------------------
let str = 'we love developement'

for (let i1 of str)
{
    console.log(i1)
}// كل حرف وحدووو تطبع
//w e  l .........
//-----------------------------------------
//--------------------------
let y1 = 0
for(y1=0 ; y1 <=10 ; y1++){
    if(y1==5){
        break //تعني عندما تصل الى 5 توقف
    }
    console.log(y1)
}//1 2 3 4 



let a = 0
for(a = 0 ; a <=10 ; a++){
   if(a==5){
    continue//لا تطبع الرقم 5
   } 
    console.log(a)
}//1 2 3 4 6 7 8 9 10

