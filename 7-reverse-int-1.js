// 7. Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let reversed = +String(Math.abs(x)).split('').reverse().join('')

  if (reversed > 0x7FFFFFFF) {
    return 0
  }

  return x < 0 ? -reversed : reversed
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(2 ** 31 - 1))
