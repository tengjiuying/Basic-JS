// Write your cade below:
 function caclRemaindar(a,b) {return a%b};

function caclSum(numArray) {
    "use strict";
    let sum=0;
    numArray.forEach((item)=>{
        sum+=item;
    });
    return sum; }

 function caclSumInConditon(numArray,num) {
    'use strict';
    let sum = 0 ;
    numArray.forEach((item)=>{
        if( item < num )
    sum+=item;
});
    return sum;
}


module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}