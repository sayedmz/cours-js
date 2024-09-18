function xy1(){
    console.log('hello')
}
window.xy1()//hello

var x = 10;
console.log(window.x);//10

let y = function(){
    console.log('hi how are you')
}
window.y//error

let z = 10 ; 
console.log(window.z);//error
console.log(z);//10

