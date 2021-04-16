//5->0,1,2,3,4 （即第 1 个 5 直接输出，1 秒之后，输出 0，1，2，3，4）
for (var i = 0; i < 5; i++) {
    (function(i){
        setTimeout(function() {
            console.log(new Date, i);
        }, 1000);
    })(i);
}
console.log(new Date, i);
