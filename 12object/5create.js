let user1 = {
    name : 'mohamad',

    x:function(){
        return `hello ${user1.name} `;
    },
}
console.log(user1.name);//mohamad

let user2 = Object.create(user1);
console.log(user2.name);//mohamad
console.log(user2.x());//hello mohamad

//تعديل ضمن اوبجكت الجديدة 
user2.name = 'ahmad';
console.log(user2.name);//ahmad

//add in object jedidi 2 methode
//1ere methode
user2.age = 30;
console.log(user2.age);//30

//2eme methode
// let user2 = Object.create(user1,{
//     first:{value:20}
// });
// console.log(user2.first)

 // يجب ان ننتبه لهذا الخطا
 console.log(user2.name);//ahmad  بعد التعديل

 console.log(user2.x());//hello mohamad 
 //لقد تم طبع اسم القديم لتفادي هذا الخطا 

 // نستعمل this



 let user3 = {
    name : 'halaa',

    x:function(){
        return `hello ${this.name} `;
    },
}

let user4 = Object.create(user3);

console.log(user4.name);//halaa

user4.name = 'abed';

console.log(user4.name);//abed // بعد التعديل

console.log(user4.x());//hello abed //تم استعمال الاسم الجديد


