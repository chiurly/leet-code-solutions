/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = nums => {
  let length = nums.length
  let dups = 0

  for (let i = 1; i < length; i++) {
    if (nums[i] == nums[i - 1]) {
      dups++
    } else {
      nums[i - dups] = nums[i]
    }
  }

  return length - dups
}

console.log(removeDuplicates([1, 1, 2])) // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // 5
