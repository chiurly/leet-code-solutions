// 13. Roman to Integer

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = s => {
  let intPerRoman = new Map([
    ['I', 1],
    ['IV', 4],
    ['V', 5],
    ['IX', 9],
    ['X', 10],
    ['XL', 40],
    ['L', 50],
    ['XC', 90],
    ['C', 100],
    ['CD', 400],
    ['D', 500],
    ['CM', 900],
    ['M', 1000]
  ])

  let sum = 0

  for (let i = 0; i < s.length; i++) {
    let current = s.charAt(i)
    let next = s.charAt(i + 1)

    if (intPerRoman.has(current + next)) {
      sum += intPerRoman.get(current + next)
      i++
    } else {
      sum += intPerRoman.get(current)
    }
  }

  return sum
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
