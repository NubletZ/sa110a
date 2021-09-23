export function take(array:any[], n:number=1){
    const result = []
    var x = array.length
    for(let i = 0; i < n; i++){
        if(i < x) result.push(array[i]) 
    }
    return result
}