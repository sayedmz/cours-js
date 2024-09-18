//css domm
//  اضافة خصائص بعدة طرق
let a = document.getElementById('container');
console.log(a);

a.innerText = 'hello word';

a.style.backgroundColor = 'red'
a.style.color = 'yellow'
a.style.width = '100%'
a.style.height = '20px'
a.style.padding = '10px'
a.style.borderLeft = '5px solid yellow'

//2eme methode

let b = document.getElementById('container1')
b.innerText = 'how are you '
b.style.cssText = ` 
background : blue; 
color : white ; 
padding : 10px ; 

 `

 //لمسح اي خصائص 

//  b.style.removeProperty('color');
//  b.style.removeProperty('background');

//-----------------------
//3eme methoe

let d = document.getElementById('container2')

d.innerText = 'what is your name '

d.style.setProperty('color' , 'red' ,)
d.style.setProperty('padding' , '30px' ,)
d.style.setProperty('background' , 'yellow' ,)
