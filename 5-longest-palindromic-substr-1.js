/*
  5. Longest Palindromic Substring

  Given a string s, return the longest palindromic (reads the same forward and backward) substring in s.

  Example 1:
    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.

  Example 2:
    Input: s = "cbbd"
    Output: "bb"

  Constraints:
    1 <= s.length <= 1000
    s consist of only digits and English letters.
*/

const isPalindrome = (s) => {
  let n = s.length

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (s[i] != s[n - 1 - i]) {
      return false
    }
  }

  return true
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let palindromes = []
  let n = s.length

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      let substring = s.substring(i, j)

      if (isPalindrome(substring)) {
        palindromes.push(substring)
      }
    }
  }

  palindromes.sort((a, b) => {
    return b.length - a.length
  })

  return palindromes[0]
}

console.log(longestPalindrome('babad')) // 'bab' or 'aba'
console.log(longestPalindrome('cbbd')) // 'bb'
console.log(longestPalindrome('a')) // 'a'
