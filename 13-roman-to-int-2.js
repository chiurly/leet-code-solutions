// 13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = s => {
  let map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ])

  let sum = 0
  let previous = 0

  for (let i = s.length - 1; i >= 0; i--) {
    let current = map.get(s.charAt(i))

    if (current >= previous) {
      sum += current
    } else {
      sum -= current
    }

    previous = current
  }

  return sum
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
