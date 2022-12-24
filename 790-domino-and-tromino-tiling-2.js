/**
 * @param {number} n
 * @return {number}
 */
var numTilings = n => {
  if (n <= 2) {
    return n
  }

  const MOD = 1e9 + 7

  let num1 = 1
  let num2 = 2
  let num3 = 5

  for (let col = 4; col <= n; col++) {
    let num4 = (2 * num3 + num1) % MOD
    num1 = num2
    num2 = num3
    num3 = num4
  }

  return num3
}

console.log(numTilings(3)) // 5
console.log(numTilings(1)) // 1
