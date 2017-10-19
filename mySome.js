var arr=[1,2,3,4,5,6,7,8,9];
// var index=10;
// function bignum(arri) {
//     return arri>index;
// }
// if(arr.some(bignum)){
//     console.log("存在比"+index+"大的数字");
// }else{
//     console.log("不存在比"+index+"大的数字");
// }

    Array.prototype.jsSome=function (index) {
       // if(typeof  Array.prototype.jsSome==='function'){
        if(typeof this=="object"){
            for(var i=0;i<this.length;i++){
                if(this[i]>index){
                    console.log("存在比"+index+"大的数字");
                    break;
                }else if(i>=this.length){
                    console.log("不存在比"+index+"大的数字");
                }
            }
        }
    }

// }

arr.jsSome(10);