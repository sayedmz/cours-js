let serials = "s100s s3000s s50000s s950000s";

//s[three num]s
console.log(serials.match(/s\d{3}s/gi));
//['s100s']
//=================
//s[4 or 5 num]s
console.log(serials.match(/s\d{4,5}s/gi));
//  من 4 الى 5
//['s3000s', 's50000s']
//=======================
//s[at least 4 ]s

console.log(serials.match(/s\d{4,}s/gi));
//   4 او اكتر
//['s3000s', 's50000s', 's950000s']
