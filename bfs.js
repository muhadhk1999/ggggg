function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
    visited.add(start);
    while (queue.length !== 0) {
      let vertex = queue.shift();
      console.log(vertex);
      for (let neighbor of graph[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
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
console.log("BFS Traversal:");
bfs(graph, "A")