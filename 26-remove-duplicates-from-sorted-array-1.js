/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = nums => {
  let len = nums.length
  let prev = null
  let k = 0

  for (let i = 0; i < len; i++) {
    let curr = nums[i]
    if (curr === prev) {
      nums[i] = null
    } else {
      k++
    }
    prev = curr
  }

  nums.sort((a, b) => {
    if (a == null) {
      return 1
    } else if (b == null) {
      return -1
    } else {
      return a - b
    }
  })

  return k
}

console.log(removeDuplicates([1, 1, 2])) // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // 5
