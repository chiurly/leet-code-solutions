/**
 * @param {string} s
 * @return {number}
*/
const lengthOfLongestSubstring = (s) => {
  let longestLength = 0

  for (let i = 0; i < s.length; i++) {
    let currentSubstring = s[i]

    for (let j = i + 1; j < s.length; j++) {
      if (currentSubstring.includes(s[j])) {
        break
      }
      currentSubstring += s[j]
    }

    longestLength = Math.max(longestLength, currentSubstring.length)
  }

  return longestLength
}
