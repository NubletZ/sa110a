import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../lodashTake.ts";

Deno.test("take", () =>{
    assertEquals(_.take([1,2,3,4,5], 3), [1,2,3])
    assertEquals(_.take([3,6,7], 6), [3,6,7])
    assertEquals(_.take([1,2,3]), [1])
    assertEquals(_.take([3,6,7], 0), [])
})