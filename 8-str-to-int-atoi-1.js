// 8. String to Integer (atoi)

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = str => {
  const MAX_INT = 0x7FFFFFFF
  const DIGITS = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

  str = str.trimStart()

  let firstChar = str.charAt(0)

  if (firstChar == '-' || firstChar == '+') {
    str = str.substring(1)
  }

  let digitCount = 0

  while (DIGITS.has(str.charAt(digitCount))) {
    digitCount++
  }

  if (digitCount == 0) {
    return 0
  }

  let int = Number.parseInt(str.substring(0, digitCount))

  if (firstChar == '-') {
    if (int > MAX_INT + 1) {
      int = MAX_INT + 1
    }
    int = -int
  } else if (int > MAX_INT) {
    int = MAX_INT
  }

  return int
}

console.log(myAtoi('42'))
console.log(myAtoi('   -42'))
console.log(-(2 ** 31), 2 ** 31 - 1, 0x7FFFFFFF)
