//sibling and parents

let z = document.getElementById("two");
console.log(two);

// للوصول الى العنصر ما قبل عنصر  المستهدف
console.log(z.previousElementSibling);
z.previousElementSibling.style.color = "red";
// z.previousElementSibling.remove();

//  للوصول الى العنصر ما بعد عنصر المستهدف

console.log(z.nextElementSibling);

z.nextElementSibling.style.color = "blue";

// للوصول الى ما بعد العنصر مهما كان نوعه
// z.nextSibling

// للوصول الى ما قبل العنصر مهما كان نوعه
// z.previousSibling

//للوصول الى الاب

z.parentElement.style.background = "yellow";
console.log(z.parentElement);
// z.parentElement.remove()
//=============================================

console.log(`=====================`);
console.log(z.children); // z يجلب لنا العناصر الموجودة في
console.log(z.children[0]);
console.log(`=====================`);
console.log(z.childNodes); //جميع ما هو موجود في عنصر بما فيها العناصر والنصوص والفراغات
console.log(z.childNodes[2]); //
console.log(`=====================`);
console.log(z.firstChild); // يجلب اول ابن مهما كان نوعه
console.log(z.lastChild); //  يجلب اخر ابن عنده
console.log(`=====================`);
console.log(z.firstElementChild); //  يجلب اول عنصر مثل ديف او هادر
console.log(z.lastElementChild);
