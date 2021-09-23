export function take(array:any[], n:number){
    const result = []
    var x = array.length
    for(let i = 0; i < n; i++){
        if(n < x) result.push(array[i]) 
    }
    return result
}