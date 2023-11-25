import memo from '../src/memoize.js'
import {assert} from 'chai'

describe("Memoize", function() {
  it('should not call function if value already exists in known cache', function () {
    let count = 0;
    // This function exists to count every time it's called so we know if memoize reduced the 
    // call count by caching values
    let f = (a) => {
      count += 1;
    }

    let memoized_f = memo(f);
    memoized_f(1)
    memoized_f(2)
    memoized_f(3)
    memoized_f(1)
    memoized_f(2)
    assert.equal(count, 3);
  })

  it('should return same value as the function with same params, given the function is deterministic', function () {
    // First we define a function to test memoize with
    
    // basic fast recursive "to the power of" function for integers
    // this is a pretty cool function, it's one of my favorites
    // it calculates x^n, given both are integers
    const pow = (x, n) => {
      // base edge cases
      if(n == 0) return 1;
      if(n == 1) return x;

      if(n%2 == 0) {
        // if n is even, we can do x^n = x^(n/2) * x^(n/2)
        let result = pow(x, n/2);
        return result * result;
      } else {
        // if n is odd, we just do x^n = x^(n-1) * x, and we end up with n being even on the next call
        return pow(x, n-1) * x;
      }
    }

    let memoizedPow = memo(pow);
    
    // Now we test that memoize will remember our functions outputs!
    let inputList = [[0,0], [0,1], [100,5], [123,2], [5,24], [2,10]];
    let outputList = [null, null, null, null, null, null]

    for(let i = 0; i < inputList.length * 100; i++) {
      let input = inputList[i%inputList.length];
      let result = memoizedPow(input[0], input[1]);
      if(outputList[i%inputList.length] === null) {
        outputList[i%inputList.length] = result;
      } else {
        assert.equal(outputList[i%inputList.length], result);
      }
    }
  })
})
