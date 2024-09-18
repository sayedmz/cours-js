//---------hoisting-----------

//  console.log(x);

//  var x  = 10 ;      //undefined

// هذا الكود الجافا سكربت تقراه على الشكل التالي

// var x ;

// console.log(x);

// x =10 ; //undefined
//  hoisting يستقبل var
//------------------------------------------

// console.log(x);
// let x = 10; // error

// let  hoisting لا يستقبل 
//------------------------------------------

//-----------
text() //hello1
function text()   // names function declerition. functionلاننا  بدءنا ب 
     {
      console.log('hello1 ')       // hoisting  تستقبل 
     }                       

     //-----------
     function text2() 
    {
        console.log('hello2 ')
} 
text2()//hello2
     



let text1 = function ()  // names function exprition.  functionلاننا لم نبدء ب 
  {
    console.log('hello3 ') 
  }                      // hoisting لا يستقبل 
text1() //hello3 


// text4() //eroor            // hoisting لا يستقبل 
// let text4 = function () 
//   {
//     console.log('hello3 ') 
//   } 


//   معلومة عن القوسين مهمة  
let text5 = function () 
  {
    console.log('hello5') 
  }
  
  console.log( text5) 
//   ƒ () 
//   {
//     console.log('hello3 ') 
//   }

console.log(text5())  //hello5
  
