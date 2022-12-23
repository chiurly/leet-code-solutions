/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = strs => {
  let stringCount = strs.length
  let first = strs[0]
  let firstLength = first.length
  let longestPrefix = ''

  let isCommon = (prefix) => {
    let right = prefix.length

    for (let i = 1; i < stringCount; i++) {
      if (strs[i].substring(0, right) != prefix) {
        return false
      }
    }

    return true
  }

  for (let right = 1; right <= firstLength; right++) {
    let prefix = first.substring(0, right)

    if (!isCommon(prefix)) {
      break
    }

    if (prefix.length > longestPrefix.length) {
      longestPrefix = prefix
    }
  }

  return longestPrefix
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''
console.log(longestCommonPrefix(['x'])) // 'x'
console.log(longestCommonPrefix(['xx', 'xx'])) // 'xx'
console.log(longestCommonPrefix(['ca', 'a'])) // ''
