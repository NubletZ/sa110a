import { expect } from 'https://deno.land/x/tdd/mod.ts'
import * as _ from '../takeRight.ts'

Deno.test("takeRight", () => {
    let x = _.takeRight([1,2,3,4], 2)
    expect(x).to.equal([3,4])
    console.log("\n_.takeRight([1,2,3,4], 2) = [3,4]  ... OK")
    let y = _.takeRight([3,4,6], 6)
    expect(y).to.equal([3,4,6])
    console.log("_.takeRight([3,4,6], 6) = [3,4,6]  ... OK")
    let z = _.takeRight([1,2,3])
    expect(z).to.equal([3])
    console.log("_.takeRight([1,2,3]) = [3]  ... OK")
    let w = _.takeRight([1,2,3], 0)
    expect(w).to.equal([])
    console.log("_.takeRight([1,2,3], 0) = []  ... OK")
})