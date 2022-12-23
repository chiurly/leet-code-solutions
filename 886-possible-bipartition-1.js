// 886. Possible Bipartition

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = (n, dislikes) => {
  var bfs = (source) => {
    let possible = true
    let queue = [source]
    groupPerNode[source] = 0

    while (queue.length) {
      let node = queue.shift()

      neighborsPerNode[node].forEach(neighbor => {
        if (groupPerNode[neighbor] == groupPerNode[node]) {
          possible = false
          return
        } else if (groupPerNode[neighbor] == -1) {
          groupPerNode[neighbor] = 1 - groupPerNode[node]
          queue.push(neighbor)
        }
      })

      if (!possible) {
        return false
      }
    }

    return true
  }

  let neighborsPerNode = []

  for (let i = 1; i <= n; i++) {
    neighborsPerNode[i] = []
  }

  dislikes.forEach(dislike => {
    neighborsPerNode[dislike[0]].push(dislike[1])
    neighborsPerNode[dislike[1]].push(dislike[0])
  })

  let groupPerNode = []

  for (let i = 1; i <= n; i++) {
    groupPerNode[i] = -1
  }

  for (let node = 1; node <= n; node++) {
    if (groupPerNode[node] == -1) {
      if (bfs(node) == false) {
        return false
      }
    }
  }

  return true
}

console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]])) // true
console.log(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]])) // false
console.log(possibleBipartition(5, [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]])) // false
console.log(possibleBipartition(5, [[1, 2], [3, 4], [4, 5], [3, 5]])) // false
console.log(possibleBipartition(10, [[4, 7], [4, 8], [2, 8], [8, 9], [1, 6], [5, 8], [1, 2], [6, 7], [3, 10], [8, 10], [1, 5], [7, 10], [1, 10], [3, 5], [3, 6], [1, 4], [3, 9], [2, 3], [1, 9], [7, 9], [2, 7], [6, 8], [5, 7], [3, 4]])) // true
