/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = (s, p) => {
  if (p.length == 0) {
    return s.length == 0
  }

  let firstMatch = (s.length != 0 && (p.charAt(0) == s.charAt(0) || p.charAt(0) == '.'))

  if (p.length >= 2 && p.charAt(1) == '*') {
    return (isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p)))
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1))
  }
}

console.log(isMatch('aa', 'a')) // false
console.log(isMatch('aa', 'a*')) // true
console.log(isMatch('ab', '.*')) // true
console.log(isMatch('aab', 'c*a*b')) // true
console.log(isMatch('ab', '.*c')) // false
console.log(isMatch('mississippi', 'mis*is*ip*.')) // true
console.log(isMatch('abcd', 'd*')) // false
console.log(isMatch('aaa', 'a*a')) // true
console.log(isMatch('aaa', 'ab*a*c*a')) // true
