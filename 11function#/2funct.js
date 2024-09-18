
let x1 = 30; //   هذا المتغر  نستطيم استعماله في اي مكان من البرنامج   global 


function pro(price , taxes , ads)
{
    let x = 20; //  funcion هذا المتغر لا نستطيم استعماله الا بداخل local 
    let product = price + taxes;
    let result  = product + ads;
    return result;  //  return بواسطة  pro تساوي result اصبح 

}
let y = pro(200,150,300);


console.log(y);//650
console.log(y/2);//325
//نستطيع اجراء عمليات اضافية عليه 

//---------------------------------------------------

// age in the dyas end in  the hours
function days(age)
{
    let result = age * 365;
    return result;
}
let day = days(26);
console.log(day) //9490

function CalcAgeByHours(age1)
{
    let result =  age1 * 24;
    return result;
}
let hour = CalcAgeByHours(day);
console.log(hour + ' hours') //227760 hours

