const OPENERS = new Map([
  ['(', 1],
  ['[', 2],
  ['{', 3]
])

const CLOSERS = new Map([
  [')', 1],
  [']', 2],
  ['}', 3]
])

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = s => {
  let queue = []

  for (let i = 0; i < s.length; i++) {
    let bracketChar = s[i]
    let bracketIndex = OPENERS.get(bracketChar)

    if (bracketIndex != undefined) {
      queue.push(bracketIndex)
      continue
    }

    if (CLOSERS.get(bracketChar) != queue.pop()) {
      return false
    }
  }

  if (queue.length > 0) {
    return false
  }

  return true
}