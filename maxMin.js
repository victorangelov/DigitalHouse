function maxmin(a,b,c,d,e){
    var min = Math.min(a,b,c,d,e)
    var max = Math.max(a,b,c,d,e)
    var array = [min,max,c,d,e] 
    return array   
}

console.log(maxmin(10,1,4,5,6))