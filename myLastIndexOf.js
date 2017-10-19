var array=[1,2,3,4,5];
console.log(array.lastIndexOf(3));


Array.prototype.myLastIndexOf=function (callback,index) {
    if(typeof callback!=='object'){
        try{
            throw new TypeError(callback+' is not a function');
        }
        catch(e){
            // console.error(e);
        }
    }
    for(var i=this.length;i>0;i--){
        if(Object.prototype.hasOwnProperty.call(this,i)){
            // callback(this[i],i,this);
            if(this[i]==index){
                console.log(i);
                break;
            }else if(i==0){
                console(-1);
            }
        }
    }
}

array.myLastIndexOf(console.log(),3);