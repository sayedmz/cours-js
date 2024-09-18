//-----------global ----------local------------

//-----------global نستعملها في كل مكان ------

for(var  i = 0 ;i < 10;  i++) //i  global
//var يستقبل hoisting
{
console.log(i) //0........9
}

console.log(i)//10


//-----------local مثلا function  تستعمل فقط داخل  

for(let  j = 0 ;j < 10;  j++) //i  local
//let لا يستقبل hoisting
{
    console.log(j) //0.........9
}

//console.log(j)//error

//--------------------------------------------
//على هذا الشكل تعمل فونكشن لوحدها 
//نعضعا كلها بين قوسين وفي نهايتها نزيد كوسين لتعمل لوحدها

(     function()
{
    console.log('hello world')
}
)() //hello world

//exemple 

console.log(  x()  )
function x()
{
    function y()  {return 1}
    
    return y();
    function y()  {return 0}
    
} //0
//شرح لماذا الجواب صفر لن جافا قرات الكود على هذا الشكل


function x()  // hoisting
{
    function y()  {return 1}
    function y()  {return 0}  // hoisting
    return y();
    
    
}
console.log(  x()  ) //0