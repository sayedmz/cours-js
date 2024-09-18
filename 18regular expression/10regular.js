let txt = "we love programming and @ because @ is amazing";
console.log(txt.replaceAll("@", "java"));
//we love programming and java because java is amazing
let re = /@/gi;
console.log(txt.replaceAll(re, "java"));
//we love programming and java because java is amazing
console.log(txt.replaceAll(/@/gi, "java"));
//we love programming and java because java is amazing
