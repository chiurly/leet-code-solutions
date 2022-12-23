/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  let m = nums1.length
  let n = nums2.length
  let length = m + n
  let median = 0
  let merged = []

  for (let i = 0; i < m; i++) {
    merged.push(nums1[i])
  }

  for (let i = 0; i < n; i++) {
    merged.push(nums2[i])
  }

  merged.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    }
    return 0
  })

  if (length % 2 == 0) {
    median = (merged[length / 2 - 1] + merged[length / 2]) / 2
  } else {
    median = merged[Math.floor(length / 2)]
  }

  return median
}

console.log(findMedianSortedArrays([-2, -1], [3]))
