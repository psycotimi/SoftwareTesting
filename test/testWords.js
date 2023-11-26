import {assert, expect} from 'chai'
import words from '../src/words.js'

describe("Words", function() {
  it("it should handle basic word cases correctly", () => {
    const cases = [
      {in: "a b c", out: ["a", "b", "c"]},
      {in: "a, basdasd c", out: ["a", "basdasd", "c"]},
    ];

    cases.forEach(c => {
      assert.deepEqual(words(c.in), c.out)
    })
  })

  it("it should handle patterns aswell", () => {
    assert.deepEqual(words("asd, asd, & asd", /[^, ]+/g), ["asd", "asd", "&", "asd"])
  })

  it("it should throw on unexpected type input", () => {
    expect(() => words(1337)).to.throw()
  })
})