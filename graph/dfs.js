// const graph = require('./graph.js')
// console.log(graph)

const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}

// 深度优先遍历
const visited = new Set()
const dfs = (n) => {
  console.log(n)
  visited.add(n)
  graph[n].forEach(c => {
    if (!visited.has(c)) {
      dfs(c)
    }
  })
}

dfs(2)