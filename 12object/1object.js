
let car = {
  title : 'bmw',
  price : 500000 , 
  color : ['white' , 'red' , 'black'],
  model : 2022,

  x:function()
  {
    return 'hello user';
  },


};

console.log(typeof car);//object
console.log(car.color);//['white', 'red', 'black']
console.log(car.color[0]);//white
console.log(car.color[1]);//red
console.log(car.model);//2022
console.log(car.title);//bmw
console.log(car.x());//hello user


