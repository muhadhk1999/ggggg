function bfs(graph,start){
    let visited=new set()
    let queue=[start]
    visited.add(start)
    while(queue.length!==0){
        let vertex=queue.shift()
        console.log(vertex)
        for(let neighbor of queue[vertex]){
            if(!visited.has(neighbor) ){
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }
}
