let names3 =  ['mohamad' ,23 ,32 , 56 , 'ahmad' , 'abed' , 'hala']

for ( let i = 0 ; i<names3.length ; i++){
    
    if(typeof names3[i] === 'number'){
        continue
    }
    console.log(names3[i]);
}
// mohamad
// ahmad
// abed
// hala

//----------------------------

let x = ['bmw' , 'mercedes' , 'honda'];
let z = ['red', 'blue' , 'yellow'];

mainloop: for(let j=0 ; j<x.length ; j++){
    
    console.log(x[j]);
    nestedloop:for(k = 0 ; k <z.length  ; k++){
console.log(` - ${z[k]}`);
if(z[k] === 'blue'){
    break 
}

    }

}
// bmw
//  - red
//  - blue
// mercedes
//  - red
//  - blue
// honda
//  - red
//  - blue
//==============================================
console.log(`=======================`)
let x1 = ['bmw' , 'mercedes' , 'honda'];
let z1 = ['red', 'blue' , 'yellow'];

mainloop: for(let j=0 ; j<x.length ; j++){
    
    console.log(x[j]);
    nestedloop:for(k = 0 ; k <z.length  ; k++){
console.log(` - ${z[k]}`);
if(z[k] === 'blue'){
    break mainloop
}

    }

}
// bmw
//  - red
//  - blue
