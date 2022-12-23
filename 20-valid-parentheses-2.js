/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = s => {
  let chars = Array.from(s)
  let length = chars.length
  let stack = []

  for (let i = 0; i < length; i++) {
    let char = chars[i]
    if (char == '(') {
      stack.push(')')
    } else if (char == '[') {
      stack.push(']')
    } else if (char == '{') {
      stack.push('}')
    } else if (stack.length == 0 || char != stack.pop()) {
      return false
    }
  }

  return stack.length == 0
}

console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('[')) // false
