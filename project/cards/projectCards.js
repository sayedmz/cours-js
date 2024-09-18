let names = ['ronaldo' , 'benzema' , 'junior' , 'ronaldo','ronaldo' , 'benzema' , 'junior' , 'ronaldo'];
let ages = ['39 yeras old' , '35 yeras old' , '24 yeras old' , '39 yeras old','39 yeras old' , '35 yeras old' , '24 yeras old' , '39 yeras old'];
let imgs = ['download.jpg' , 'images.jpg' , 'Untitled11.jpg' , 'Untitled.jpg','download.jpg' , 'images.jpg' , 'Untitled11.jpg' , 'Untitled.jpg']
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

function element(names1 , ages1 , imgs1 )
{
  //elemnets
  let card = document.createElement('div');
  let title = document.createElement('h2');
  let age = document.createElement('p');
  let img = document.createElement('img');

  //content
  let head = document.createTextNode(names1);
  let ageContent = document.createTextNode(ages1);
  img.src = imgs1

  title.appendChild(head);
  age.appendChild(ageContent);
  
 card.appendChild(title);
 card.appendChild(age);
 card.appendChild(img);
//style
card.style.width = '200px';
card.style.background = '#444';
card.style.color = '#fff';
card.style.padding = '10px';
card.style.margin = '2px';
card.style.display = 'inline-block';

img.style.width = '100%'
img.style.height = '200px'

  container.appendChild(card);
}

for (let i = 0 ; i <8 ; i++)
{
  element(names[i] , ages[i] , imgs[i]);
}