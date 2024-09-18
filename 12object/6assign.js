//الدمج
let a1 = {
    num1:1,

    x:function(){
        return 'number1'
    }
};
let a2 = {
    age:30,
};

let a3 = {
    mun:3,
};
let a4 = Object.assign(a1,a2,a3);
console.log(a4)//{num1: 1, x: ƒ, age: 30, mun: 3}
//تعديل
a4.num1 = 10;
console.log(a4);
// {num1: 10, x: ƒ, age: 30, mun: 3}
//add
a4.r = 100;
console.log(a4);
//{num1: 10, x: ƒ, age: 30, mun: 3, r: 100}

let a5 = Object.assign(a1,a2,a3,
  {num4:4 } );
  console.log(a5);
  //{num1: 10, x: ƒ, age: 30, mun: 3, r: 100, num4: 4}
  //تأخذ اخر قمية تم تعديلها والاضافات