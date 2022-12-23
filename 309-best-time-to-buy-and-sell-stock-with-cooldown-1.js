/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = prices => {
  let priceCount = prices.length
  let sell = 0
  let hold = Number.MIN_SAFE_INTEGER
  let rest = 0

  for (let i = 0; i < priceCount; i++) {
    let oldSell = sell
    sell = hold + prices[i]
    hold = Math.max(hold, rest - prices[i])
    rest = Math.max(rest, oldSell)
  }

  return Math.max(sell, rest)
}

console.log(maxProfit([1, 2, 3, 0, 2])) // 3
console.log(maxProfit([1])) // 0
