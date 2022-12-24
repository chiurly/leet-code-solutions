/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = x => {
  if (x < 0) {
    return false
  }

  let xReversed = 0
  let temp = x

  while (temp > 0) {
    xReversed = xReversed * 10 + temp % 10
    temp = Math.floor(temp / 10)
  }

  return xReversed === x
}

console.assert(isPalindrome(121) == true, '1')
console.assert(isPalindrome(-121) == false, '2')
console.assert(isPalindrome(10) == false, '3')
