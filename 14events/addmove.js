//add and move and toggle class

let demo = document.getElementById('demo');
let demo1 = document.getElementById('demo1');

demo.onclick = function(){
    //لاضافة كلاس للعنصر عند الضغط عليه نسنطيع اضافة اكثر من كلاس
demo.classList.add('x1' , 'x2')

}
//oncontextmenu تعمل بالضغط على ريديكليك
demo.oncontextmenu = function(){
 demo.classList.remove('x2');
}
//
//toggle ينوب عن الاثنن معا اول ضغطه تضيف الثانية تمسح
demo1.onclick = function (){
    demo1.classList.toggle('togg')
}



//لاظهار اسم الكلاس الموجود على العنصر
console.log(demo.classList);