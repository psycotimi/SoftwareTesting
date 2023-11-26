import {assert, expect} from 'chai'
import drop from '../src/drop.js'

describe("Drop", function() {
  it("it should drop items correctly", () => {
    const cases = [
      {in1: [2, 2, 2], in2: 2, out: [2]},
      {in1: [2, 2, 2], in2: 0, out: [2, 2, 2]},
      {in1: null, in2: 2, out: []},
      {in1: [], in2: 2, out: []}
    ]

    cases.forEach(c => {
      assert.deepEqual(drop(c.in1, c.in2), c.out)
    })
  })
})