import {assert, expect} from 'chai'
import ceil from '../src/ceil.js'

describe("Ceil", function() {
  it("should ceil random positive numbers correctly", () => {
    // Test a 1000 random positive numbers
    for(let i = 0; i < 1000; i++) {
      let integer = Math.floor(Math.random() * 100000) + 1;
      // Make sure number being added is larger than 0 and smaller than 1
      let newNumber = integer + Math.min(Math.max(0.0001, Math.random()), 0.99999);
      let newInteger = ceil(newNumber);
      assert.equal(newInteger, integer+1);
    }
  })
  
  it("should ceil random negative numbers correctly", () => {
    // Test a 1000 random positive numbers
    for(let i = 0; i < 1000; i++) {
      let integer = -1 * Math.floor(Math.random() * 100000) - 1;
      // Make sure number being subtracted is larger than 0 and smaller than 1
      let newNumber = integer - Math.min(Math.max(0.0001, Math.random()), 0.99999);
      let newInteger = ceil(newNumber);
      assert.equal(newInteger, integer);
    }
  })

  it("should ceil a set of cases correctly", () => {
    const cases = [
      {in: 0.1, out: 1.0},
      {in: 0.0, out: 0.0},
      {in: -1.1, out: -1.0},
      {in: 1.45234234234, out: 2}
    ]

    cases.forEach(c => {
      assert.equal(ceil(c.in), c.out);
    })
  })
})