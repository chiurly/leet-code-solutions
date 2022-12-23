/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  let answer = []

  for (let i = 0; i < temperatures.length; i++) {
    let j = i
    for (j; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        break
      }
    }
    if (j == temperatures.length) {
      j = i
    }
    answer.push(j - i)
  }

  return answer
}
