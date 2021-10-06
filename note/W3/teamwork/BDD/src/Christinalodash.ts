  export function initial(clist:any[]){
    clist.pop()
    return clist
  }

  export function takeRight(array:any[], n:number=1){
    const result = []
    var x = array.length
    var i = x - n;
    if(i < 0) i = 0;
    for(i; i < x; i++){
        if(i < x) result.push(array[i]) 
    }
    return result
}
  