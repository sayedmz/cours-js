let names =  ['mohamad' , 'ahmad' , 'abed' , 'hala' ]

for(let x = 0 ; x < 4 ; x++)
{
    console.log(names [x]);
}//mohamd ahmad abed hala


//exemple
let names1 =  ['mohamad' , 'ahmad' , 'abed' , 'hala', 'raghida' , ' abedd' ]

for( let y = 0 ; y < names1.length; y = y + 2)
{
    console.log(names1[y]);
}//mohamd abed raghida 

//exemple 3

let z = 'mouhamad'

for(let z1 = 0 ; z1 < z.length ; z1++)
{
    console.log(z[z1]);
}//m o u h a m a d 

console.log('------------------------');

let v = 'mouhamad'

for(let v1 = v.length - 1 ; v1 >= 0  ; v1--)
{
    console.log(v[v1]);
}//d a m a h u o m
//exmple 4 

let names3 =  ['mohamad' , 'ahmad' , 'abed' , 'hala']

for(let a = names3.length - 1 ; a >= 0 ; a--)
{
    console.log(names3[a]);
}//hala abed ahmad mohamad

let names4 =  ['mohamad' , 'ahmad' , 'abed' , 'hala']

for(let a = names4.length - 1 ; a > 0 ; a--)
{
    console.log(names4[a]);
}//hala abed ahmad 


