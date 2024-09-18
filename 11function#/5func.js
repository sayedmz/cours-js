function x1(name = 'ahmed') //القمية الافتراضية في حال المستخدم لم يدخل اي قيمة
//ahamd is parameture
{
    console.log(`hello ${name}`)
}
x1() //hello ahmed

function x2(name = 'ahmed')
{
    console.log(`helol ${name}`)

}
x2('mouhamad zak') //helol mouhamad zak
// mouhamad zak is arguments

//---------------------------------
function x3(age = 0)
{
    console.log(age * 365)
}
x3()//0
x3(5)//1825
x3(10)//3650
//--------------------------
function x4(name = ' ' , age = 0)
{
    console.log(`hello ${name} you age is  ${age * 365}`)

}
x4('abed' , 10)//hello abed you age is 3650
x4('hala' , 100) //hello hala you age is 36500

//-------------------------------

function x51(...numbers1)
{
    console.log(numbers1);
}x51(12,13,14,15,16,17)//[12, 13, 14, 15, 16, 17]

//----------------------------------
// sum the numbers in  arry
function x5(  ...numbers  ) //... يعني استطيع ان اصنع وحدة ادخال لا نهائي
{
   let y = 0
   for(let i = 0 ; i < numbers.length ; i++)
   {
    y = y + numbers[i];
   }
   console.log(y)
}
x5(23,43,22,12);//100
x5(12,32,43,56,65)//208