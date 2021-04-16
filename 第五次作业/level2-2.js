//立即输出 0，之后每隔 1 秒依次输出 1,2,3,4,5
for (var i = 0; i < 5; i++) {
    (function(j) {
     setTimeout(function() {
      console.log(new Date, j);
     }, 1000 * j); 
    })(i);
   }
    
   setTimeout(function() { 
    console.log(new Date, i);
   }, 1000 * i);