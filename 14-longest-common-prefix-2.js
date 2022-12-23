/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = strs => {
  let stringCount = strs.length
  let first = strs[0]
  let firstLength = first.length

  for (let i = 0; i < firstLength; i++) {
    let char = first.charAt(i)

    for (let j = 1; j < stringCount; j++) {
      if (strs[j].length == i || strs[j].charAt(i) != char) {
        return first.substring(0, i)
      }
    }
  }

  return first
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''
console.log(longestCommonPrefix(['x'])) // 'x'
console.log(longestCommonPrefix(['xx', 'xx'])) // 'xx'
console.log(longestCommonPrefix(['ca', 'a'])) // ''
