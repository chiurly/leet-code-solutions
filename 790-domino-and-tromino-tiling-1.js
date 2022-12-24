/**
 * @param {number} n
 * @return {number}
 */
var numTilings = n => {
  const MOD = 1e9 + 7

  let nums = new Array(1001)
  nums[1] = 1
  nums[2] = 2
  nums[3] = 5

  for (let col = 4; col <= n; col++) {
    nums[col] = (2 * nums[col - 1] + nums[col - 3]) % MOD
  }

  return nums[n]
}

console.log(numTilings(3)) // 5
console.log(numTilings(1)) // 1
