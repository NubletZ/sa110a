export function intersection() {
    const interList = []
    var n = arguments.length;
    if(n <= 1) return arguments;
    //console.log(` array = ${arguments[1]}`)
    for(let i = 0; i < arguments[0].length; i++){
        //console.log(`start to check ${i}`)
        if(checkIntersection(arguments, n-1, arguments[0][i])) interList.push(arguments[0][i])
    }
    return interList
}

function checkIntersection(array, x, value){
    for(let j=0; j < array[x].length; j++){
        if(x==1){
            if(array[1][j]==value){
                //console.log(`PUSH ${array[1][j]} == ${value}`)
                return true;
            }
            else if(j + 1 == array[x].length){
                //console.log(`${array[1][j]} == ${value}, FALSE`)
                return false;
            }
        }
        else if(array[x][j]==value){
            //console.log(`go to next function`)
            return checkIntersection(array, x-1, value);
        }
    }
    return false;
}