import {assert, expect} from 'chai'
import every from '../src/every.js'

describe("Every", function() {
  it("it should check every condition correctly", () => {
    const cases = [
      {in1: [1, 3, 5], in2: (x) => (x%2) === 1, out: true},
      {in1: [2, 4, 6], in2: (x) => (x%2) === 0, out: true},
      {in1: [6, 7, 8], in2: (x) => x > 5, out: true},
      {in1: [6, 7, 2], in2: (x) => x > 5, out: false},
      {in1: [1, 3, 6], in2: (x) => (x%2) === 1, out: false}
    ]

    cases.forEach(c => {
      assert.equal(every(c.in1, c.in2), c.out)
    })
  })

  it("it should return true for empty or null arrays, regardless of function", () => {
    assert.equal(every([], () => false), true)
    assert.equal(every(null, () => false), true)
  })
})
