/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = (n, edges) => {
  let graph = new Array(n)
  let answer = new Array(n).fill(0)
  let count = new Array(n).fill(1)

  for (let i = 0; i < n; i++) {
    graph[i] = new Array()
  }

  for (let edge of edges) {
    graph[edge[0]].push(edge[1])
    graph[edge[1]].push(edge[0])
  }

  let dfs1 = (node, parent) => {
    for (let child of graph[node]) {
      if (child != parent) {
        dfs1(child, node)
        count[node] += count[child]
        answer[node] += answer[child] + count[child]
      }
    }
  }

  let dfs2 = (node, parent) => {
    for (let child of graph[node]) {
      if (child != parent) {
        answer[child] = n - count[child] + answer[node] - count[child]
        dfs2(child, node)
      }
    }
  }

  dfs1(0, -1)
  dfs2(0, -1)

  return answer
}

console.log(sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]])) // [8, 12, 6, 10, 10, 10]
console.log(sumOfDistancesInTree(1, [])) // [0]
console.log(sumOfDistancesInTree(2, [[1, 0]])) // [1, 1]
console.log(sumOfDistancesInTree(5, [[2, 0], [4, 2], [3, 1], [1, 0]])) // [6, 7, 7, 10, 10]
