/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = (nums, queries) => {
  let n = nums.length
  let m = queries.length
  let answer = new Array(m)
  let sortedNums = nums.sort((a, b) => a - b)

  for (let i = 0; i < m; i++) {
    let remainingSum = queries[i]
    let count = 0

    while (count < n && sortedNums[count] < remainingSum) {
      remainingSum -= sortedNums[count]
      count++
    }

    answer[i] = count
  }

  return answer
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21])) // [2, 3, 4]
console.log(answerQueries([2, 3, 4, 5], [1])) // [0]
console.log(answerQueries([736411, 184882, 914641, 37925, 214915], [331244, 273144, 118983, 118252, 305688, 718089, 665450])) // [2, 2, 1, 1, 2, 3, 3]
console.log(answerQueries([76478, 102343, 247573, 477461, 430399, 260435, 250631, 785081, 904724, 392720], [63736, 339518, 37262, 108251, 216825])) // [0, 2, 0, 1, 2]
