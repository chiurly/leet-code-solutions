/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = (n, edges) => {
  let neighborsPerNode = []

  for (let i = 0; i < n; i++) {
    neighborsPerNode[i] = []
  }

  for (let i = 0; i < edges.length; i++) {
    neighborsPerNode[edges[i][0]].push(edges[i][1])
    neighborsPerNode[edges[i][1]].push(edges[i][0])
  }

  let distances = []

  for (let i = 0; i < n; i++) {
    distances[i] = []
    for (let j = 0; j < n; j++) {
      distances[i][j] = 0
    }
  }

  for (let startNode = 0; startNode < n; startNode++) {
    let queue = [startNode]
    let nextQueue = []
    let explored = []
    let depth = 1

    while (queue.length > 0 || nextQueue.length > 0) {
      if (queue.length == 0) {
        queue = nextQueue
        nextQueue = []
        depth++
      }

      let node = queue.shift()
      let neighbors = neighborsPerNode[node]
      explored.push(node)

      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i]
        if (explored.includes(neighbor)) {
          continue
        }
        distances[startNode][neighbor] += depth
        nextQueue.push(neighbor)
      }
    }
  }

  let answer = []

  for (let i = 0; i < n; i++) {
    answer[i] = 0
    for (let j = 0; j < n; j++) {
      answer[i] += distances[i][j]
    }
  }

  return answer
}

console.log(sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]])) // [8, 12, 6, 10, 10, 10]
console.log(sumOfDistancesInTree(1, [])) // [0]
console.log(sumOfDistancesInTree(2, [[1, 0]])) // [1, 1]
console.log(sumOfDistancesInTree(5, [[2, 0], [4, 2], [3, 1], [1, 0]])) // [6, 7, 7, 10, 10]
