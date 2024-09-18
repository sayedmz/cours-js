let x = ['bmw' , 'mercedes' , 'honda']
let y = [2021 , 2022, 2023]
let z = ['red', 'blue' , 'yellow']

for(let i = 0; i < x.length ; i++ )
{
    console.log(` cars : ${x[i]}`)
   
    for(let j = 0 ; j < y.length ; j++)
    {
        console.log( `model : ${y[j]}`)
    }
    for(let k = 0 ; k < z.length ; k++)
    {
        console.log( `colors : ${z[k]}`)
       
    }

    console.log(`---------------`)
}
// cars : bmw
// model : 2021
// model : 2022
// model : 2023
// colors : red
// colors : blue
// colors : yellow
// ---------------
//  cars : mercedes
// model : 2021
// model : 2022
// model : 2023
// colors : red
// colors : blue
// colors : yellow
// ---------------
//  cars : honda
// model : 2021
// model : 2022
// model : 2023
// colors : red
// colors : blue
// colors : yellow
// ---------------