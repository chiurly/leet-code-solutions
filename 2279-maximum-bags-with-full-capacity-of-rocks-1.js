/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = (capacity, rocks, additionalRocks) => {
  let n = capacity.length
  let remainingCapacity = new Array(n)

  for (let i = 0; i < n; i++) {
    remainingCapacity[i] = capacity[i] - rocks[i]
  }

  remainingCapacity.sort((a, b) => a - b)
  let i = 0

  for (; i < n && additionalRocks >= remainingCapacity[i]; i++) {
    additionalRocks -= remainingCapacity[i]
  }

  return i
}

console.log(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2)) // 3
console.log(maximumBags([10, 2, 2], [2, 2, 0], 100)) // 3
