//this keyword
// تشير الى العنصر الذ تنتمي له 
let user = {
    name : 'mouhamad',

    getName:function(){
        return user.name
    }
}
console.log(user.getName());//mouhamad

let x = {
    name : 'ahmad',

    getName:function(){
        return this.name
    }
}
console.log(x.getName());//ahmad
//-------------------------------------------
// "use strict"  تمنع الخطأ 






