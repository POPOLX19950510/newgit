//源型本身使用的方法
var array=[1,2,3,4,5];
// delete array[1];
array.forEach(function (value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
});

//实现添加原型
Array.prototype.myForEach=function (callback,thisArg) {
    if(typeof callback!=='function'){
        try{
            //处理异常
            throw new TypeError(callback+' is not a function');
        }
        catch(e){
            //输出错误
            console.error(e);
        }
    }else {
        for(var i=0;i<this.length;i++){
            //判断数组元素是否存在
            if(Object.prototype.hasOwnProperty.call(this,i)){
                callback(this[i],i,this);
            }
        }
    }
}
array.myForEach( function (value,index,arr) {
    console.log(value);
    console.log(index);
    console.log(arr);
});

