// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = x => {
  if (x < 0) {
    return false
  }

  let str = x.toString()
  return str == [...str].reverse().join('')
}

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false
