/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = (s, numRows) => {
  let chars = s.split('')
  let length = chars.length
  let rows = new Array(numRows).fill('')
  let i = 0

  while (i < length) {
    for (let j = 0; j < numRows && i < length; j++) {
      rows[j] += s[i++]
    }
    for (let j = numRows - 2; j >= 1 && i < length; j--) {
      rows[j] += s[i++]
    }
  }

  return rows.join('')
}

console.log(convert('PAYPALISHIRING', 3)) // 'PAHNAPLSIIGYIR'
console.log(convert('PAYPALISHIRING', 4)) // 'PINALSIGYAHRPI'
console.log(convert('A', 1)) // 'A'
console.log(convert('AB', 1)) // 'AB'
