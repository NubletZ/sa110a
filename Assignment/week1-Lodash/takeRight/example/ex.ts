import * as _ from '../takeRight.ts'

console.log("_.take([1,2,3,4,5], 3) = ", _.takeRight([1,2,3,4,5], 3))
console.log("_.take([3,6,7], 6) = ", _.takeRight([3,6,7], 6))
console.log("_.take([1,2,3]) = ", _.takeRight([1,2,3]))
console.log("_.take([1,2,3], 0) = ", _.takeRight([1,2,3], 0))