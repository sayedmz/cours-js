//id للوصول للعنسر 
// نستطع اعطاءه لعنصر واحد 
let head =  document.getElementById('head')//hello word

//console لطباعة العصنر في 
console.log(head);//<h1 id="head">hello word</h1>

// لتغير مابدخله العنصر على صفحة 
// head.innerHTML = 'hello mouhamad'//hello mouhamad 

// لتغير اللون او اي شيئ اخر
// head.style.color = 'red'

//class للوصول للعنسر 
// نستطيع اعطاءه لاكثر من عنصر

let head1 = document.getElementsByClassName('head1')[1];
//يجب ان نحدد موقعه بشكل اجباري 

head1.style.color = 'blue'

console.log(head1);

//tag name للوصول للعنسر 

let x = document.getElementsByTagName('h1')[0];

x.style.color = 'red'

//queryselector نستطيع الوصول الى كل العناصر
//tag name
// let y = document.querySelector('h1')
//id
// let y = document.querySelector('#')
// class
// let y = document.querySelector('.')
//تستطيع الوصول الى اول عنصر فقط

//للوصول اللى كل العناصر

let a = document.querySelectorAll('h1')[3];
a.style.color = 'yellow'

//اختصارات
//للوصول الى الخلفية
let b1 = document.body;
b1.style.background = '#444'
//tittle للوصول الى 
let t1 = document.title;
console.log(t1);//js sellcet elemnets

t1 = 'mou zak '
console.log(t1);//mou zak 
//للوصول الى الصور
// let img = document.images;
// let img = document.images[0];

// للوصول الى موقع الصورة 

//console.log(img.src)
// srcستطع تغيير الصورة من خلال تغير 
//images.src = ''
//images.alt = ''

//get  الحصول على البيانات
//set    تبديل البيانات

// links  الوصول الى 
// let lnk = document.links;
// let lnk = document.links[0];
//لتغيير الرابط
// links.href = ''

//formes  للوصول الى 

// let f = document.forms[0];



 



