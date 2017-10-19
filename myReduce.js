var arr=[
    [8,90,3,0,75],
    [45,23,78],
    [6,7]
];
//var sum=arr.reduce(function (previous,current) {
//return previous.concat(current);
//});
// console .log(sum);
Array.prototype.jsReduce=function(){
    var arr1=[];
    var arr2=[];
    var arr3=[];
    if(typeof this=="object"){
        for(var i=0;i<this.length;i++){
            arr1=this[i];
            for (var j=0;j<arr1.length;j++){
                arr2=arr1[j];
                arr3.push(arr2);
            }
        }
        return arr3;
    }
}
console.log(arr.jsReduce());