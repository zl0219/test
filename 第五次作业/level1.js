let str = "I'm?���going�??�to�?�take�??�a?�trip�?�to��?daocheng�?�on��May Day."

let p = /[?][A-z]/g;
let p2 = /[�?]/g;
let p3 = /\s+/g
str = str.replace(p,str.match(p)[0].toUpperCase());
str = str.replace(p2," ");
str = str.replace(p3," ")
console.log(str);
