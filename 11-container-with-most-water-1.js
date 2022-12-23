// 11. Container With Most Water

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = heights => {
  let max = 0
  let left = 0
  let right = heights.length - 1

  while (left < right) {
    let width = right - left
    let leftHeight = heights[left]
    let rightHeight = heights[right]
    let height = Math.min(leftHeight, rightHeight)
    max = Math.max(width * height, max)

    leftHeight < rightHeight ? left++ : right--
  }

  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49
console.log(maxArea([1, 1])) // 1
