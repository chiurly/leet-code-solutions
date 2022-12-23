/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = (n, edges, source, destination) => {
  const graph = new Map()

  // Create adjacency list
  edges.forEach(([a, b]) => {
    if (!graph.has(a)) {
      graph.set(a, [])
    }
    if (!graph.has(b)) {
      graph.set(b, [])
    }
    graph.get(a).push(b)
    graph.get(b).push(a)
  })

  const visited = new Array(n)
  const queue = [source]

  // Iterative breadth-first search
  while (queue.length > 0) {
    const node = queue.shift()
    visited[node] = true

    if (node === destination) {
      return true
    }

    graph.get(node).forEach((neighbor) => {
      if (!visited[neighbor]) {
        queue.push(neighbor)
      }
    })
  }

  return false
}

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2))
console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5))
