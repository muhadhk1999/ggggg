function dfs(graph, start) {
    visited = new Set()
    visited.add(start);
    console.log(start);
    for (let neighbor of graph[start]) {
      if (!visited.has(neighbor)) {
        dfs(graph, neighbor);
      }
    }
  }
  let graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: [],
  }
console.log("\nDFS Traversal:");
dfs(graph, "A")