function xx(names) //xx اسم function 
//names شبيه بالمتغير 
{
    console.log('hello' + names)
}
 
xx(' ali');//hello ali
xx(' ahamd');//hello ahamd
//--------------------------------------
function CalcAge(age) // لحساب عمر المستخدم بالايام
{
    let result = age * 360;
    console.log(result);
}
CalcAge(25)//9000 شخص عمره 25
CalcAge(45)//16200  شخص عمره 45
//----------------------------------------

function pro(price , taxes , ads){
    let product = price + taxes;
    let result  = product + ads;
    console.log(result);
    
}
 pro (230 , 322 , 32)//584
pro (150 , 200 , 250)  //600
pro (90 , 140, 200)//430
//    منتج سعره 90 فؤائد 140  كلفة اعلانات 200     تكلفته 
// function لا نستطيع زيادة عمليات اضافية على الحساب فقط الذي تم تعريفة في 
// // function  هي اداة نستطيع استخدام كود معين مرات كثيرة من خلال كتابته مرة واحدة فقط


