import { expect } from 'https://deno.land/x/tdd/mod.ts'
import * as _ from "../src/Christinalodash.ts";

Deno.test("initial", () => {
    let x = _.initial([1,2,3])
    expect(x).to.equal([1,2])
    
})

Deno.test("takeRight", () => {
    let x = _.takeRight([1,2,3,4], 2)
    expect(x).to.equal([3,4])
    let y = _.takeRight([3,4,6], 6)
    expect(y).to.equal([3,4,6])
    let z = _.takeRight([1,2,3])
    expect(z).to.equal([3])
    let w = _.takeRight([1,2,3], 0)
    expect(w).to.equal([])
})